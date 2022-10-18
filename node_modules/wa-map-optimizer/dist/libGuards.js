"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const isOptimizeOptions = zod_1.z.object({
    tile: zod_1.z
        .object({
            size: zod_1.z.number().positive().optional(),
        })
        .optional(),
    output: zod_1.z
        .object({
            path: zod_1.z.string().optional(),
            mapName: zod_1.z.string().optional(),
            tilesetName: zod_1.z.string().optional(),
        })
        .optional(),
});
