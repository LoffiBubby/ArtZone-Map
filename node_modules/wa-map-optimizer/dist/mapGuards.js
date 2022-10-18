"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMap =
    exports.isMapLayer =
    exports.isMapTileset =
    exports.isMapTilesetTile =
    exports.isMapTilesetTileAnimation =
    exports.isProperty =
        void 0;
const zod_1 = require("zod");
exports.isProperty = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    propertytype: zod_1.z.string().optional(),
    value: zod_1.z.unknown(),
});
exports.isMapTilesetTileAnimation = zod_1.z.object({
    duration: zod_1.z.number(),
    tileid: zod_1.z.number(),
});
exports.isMapTilesetTile = zod_1.z.object({
    animation: exports.isMapTilesetTileAnimation.array().optional(),
    id: zod_1.z.number().positive(),
    properties: exports.isProperty.passthrough().array().optional(),
});
exports.isMapTileset = zod_1.z.object({
    columns: zod_1.z.number(),
    firstgid: zod_1.z.number(),
    image: zod_1.z.string(),
    imageheight: zod_1.z.number(),
    imagewidth: zod_1.z.number(),
    margin: zod_1.z.number(),
    name: zod_1.z.string(),
    properties: exports.isProperty.passthrough().array().optional(),
    spacing: zod_1.z.number(),
    tilecount: zod_1.z.number(),
    tileheight: zod_1.z.number(),
    tilewidth: zod_1.z.number(),
    tiles: exports.isMapTilesetTile.passthrough().array().optional(),
});
exports.isMapLayer = zod_1.z.object({
    data: zod_1.z.number().gte(0).array().optional(),
});
exports.isMap = zod_1.z.object({
    tilesets: exports.isMapTileset.passthrough().array(),
    type: zod_1.z.literal("map"),
    tileheight: zod_1.z.number(),
    tilewidth: zod_1.z.number(),
    properties: exports.isProperty.passthrough().array().optional(),
    layers: exports.isMapLayer.passthrough().array(),
});
