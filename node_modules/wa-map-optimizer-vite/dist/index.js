"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMapsOptimizers = exports.getMapsScripts = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const wa_map_optimizer_1 = require("wa-map-optimizer");
const mapGuards_1 = require("wa-map-optimizer/dist/guards/mapGuards");
function getMapsLinks() {
    return fs_1.default.readdirSync(".").filter((file) => {
        if (!file.endsWith(".json") && !file.endsWith(".tmj")) {
            return false;
        }
        const object = JSON.parse(fs_1.default.readFileSync(file).toString());
        return mapGuards_1.isMap.safeParse(object).success;
    });
}
function getMapsScripts() {
    const maps = getMapsLinks();
    const scripts = {};
    for (const map of maps) {
        const object = JSON.parse(fs_1.default.readFileSync(map).toString());
        const mapObject = mapGuards_1.isMap.parse(object);
        if (!mapObject.properties) {
            continue;
        }
        const scriptProperty = mapObject.properties.find((property) => property.name === "script");
        if (!scriptProperty || typeof scriptProperty.value !== "string") {
            continue;
        }
        const scriptName = path_1.default.parse(scriptProperty.value).name;
        scripts[scriptName] = scriptProperty.value;
    }
    return scripts;
}
exports.getMapsScripts = getMapsScripts;
function getMapsOptimizers(options) {
    const maps = getMapsLinks();
    const plugins = [];
    const distFolder = options?.output?.path ?? "./dist";
    for (const map of maps) {
        const mapName = path_1.default.parse(map).name;
        const optionsParsed = options ?? {
            logs: 1,
            output: {
                path: distFolder,
                map: {
                    name: mapName,
                },
                tileset: {
                    size: {
                        height: 2048,
                        width: 2048,
                    },
                },
            },
        };
        if (!optionsParsed.output) {
            optionsParsed.output = {};
        }
        if (!optionsParsed.output.tileset) {
            optionsParsed.output.tileset = {};
        }
        optionsParsed.output.tileset.name = `${mapName}-chunk`;
        plugins.push(mapOptimizer(map, distFolder, optionsParsed));
    }
    return plugins;
}
exports.getMapsOptimizers = getMapsOptimizers;
// Map Optimizer Vite Plugin
function mapOptimizer(mapPath, distFolder, optimizeOptions) {
    return {
        name: "map-optimizer",
        load() {
            this.addWatchFile(mapPath);
        },
        async writeBundle() {
            await (0, wa_map_optimizer_1.optimize)(mapPath, optimizeOptions);
            const mapName = path_1.default.parse(mapPath).name;
            const mapExtension = path_1.default.parse(mapPath).ext;
            const optimizedMapFilePath = `${distFolder}/${mapName}${mapExtension}`;
            const mapFile = await fs_1.default.promises.readFile(mapPath);
            const map = mapGuards_1.isMap.parse(JSON.parse(mapFile.toString()));
            if (!map?.properties) {
                return;
            }
            if (!fs_1.default.existsSync(distFolder)) {
                throw new Error(`Cannot find ${distFolder} build folder`);
            }
            if (!fs_1.default.existsSync(optimizedMapFilePath)) {
                throw new Error(`Unknown optimized map file on: ${optimizedMapFilePath}`);
            }
            const optimizedMapFile = await fs_1.default.promises.readFile(optimizedMapFilePath);
            const optimizedMap = JSON.parse(optimizedMapFile.toString());
            if (!optimizedMap?.properties) {
                throw new Error("Undefined properties on map optimized! Something was wrong!");
            }
            const imageProperty = map.properties.find((property) => property.name === "mapImage");
            if (imageProperty) {
                if (typeof imageProperty.value === "string" && fs_1.default.existsSync(imageProperty.value)) {
                    const newMapImageName = `${mapName}${path_1.default.parse(imageProperty.value).ext}`;
                    await fs_1.default.promises.copyFile(imageProperty.value, `${distFolder}/${newMapImageName}`);
                    for (const property of optimizedMap.properties) {
                        if (property.name === "mapImage") {
                            property.value = newMapImageName;
                            break;
                        }
                    }
                }
            }
            const scriptProperty = map.properties.find((property) => property.name === "script");
            if (!scriptProperty || typeof scriptProperty.value !== "string") {
                return;
            }
            const assetsFolder = `${distFolder}/assets`;
            if (!fs_1.default.existsSync(assetsFolder)) {
                throw new Error(`Cannot find ${assetsFolder} assets build folder`);
            }
            const scriptName = path_1.default.parse(scriptProperty.value).name;
            const fileName = fs_1.default
                .readdirSync(assetsFolder)
                .filter((asset) => asset.match(new RegExp(`^${scriptName}\\..*\\.js$`)));
            if (!fileName) {
                throw new Error(`Undefined ${fileName} script file`);
            }
            for (const property of optimizedMap.properties) {
                if (property.name === "script") {
                    property.value = `assets/${fileName}`;
                    break;
                }
            }
            await fs_1.default.promises.writeFile(optimizedMapFilePath, JSON.stringify(optimizedMap));
        },
    };
}
