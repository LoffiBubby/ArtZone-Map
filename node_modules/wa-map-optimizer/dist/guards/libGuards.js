"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
const zod_1 = require("zod");
const mapGuards_1 = require("./mapGuards");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["NORMAL"] = 1] = "NORMAL";
    LogLevel[LogLevel["VERBOSE"] = 2] = "VERBOSE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
const isLogLevel = zod_1.z.nativeEnum(LogLevel);
const isOptimizeBufferOptions = zod_1.z.object({
    tile: zod_1.z
        .object({
        size: zod_1.z.number().positive().optional(),
    })
        .optional(),
    logs: isLogLevel.optional(),
    output: zod_1.z
        .object({
        tileset: zod_1.z
            .object({
            name: zod_1.z.string().optional(),
            size: zod_1.z
                .object({
                width: zod_1.z.number().gte(32).multipleOf(8).optional(),
                height: zod_1.z.number().gte(32).multipleOf(8).optional(),
            })
                .optional(),
        })
            .optional(),
    })
        .optional(),
});
const isOptimizeOptions = isOptimizeBufferOptions.extend({
    output: zod_1.z
        .object({
        map: zod_1.z
            .object({
            name: zod_1.z.string().optional(),
        })
            .optional(),
        path: zod_1.z.string().optional(),
        tileset: zod_1.z
            .object({
            name: zod_1.z.string().optional(),
            size: zod_1.z
                .object({
                width: zod_1.z.number().gte(32).multipleOf(8).optional(),
                height: zod_1.z.number().gte(32).multipleOf(8).optional(),
            })
                .optional(),
        })
            .optional(),
    })
        .optional(),
});
const isOptimizedMapFiles = zod_1.z.object({
    map: mapGuards_1.isMap,
    tilesetsBuffer: zod_1.z.map(zod_1.z.string(), zod_1.z.instanceof(Buffer)),
});
