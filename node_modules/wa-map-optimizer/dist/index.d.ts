/// <reference types="node" />
import { OptimizeBufferOptions, OptimizedMapFiles, OptimizeOptions } from "./guards/libGuards";
import { Map as MapFormat, MapTileset } from "./guards/mapGuards";
export declare const optimize: (mapFilePath: string, options?: OptimizeOptions | undefined) => Promise<void>;
export declare const optimizeToBuffer: (map: MapFormat, tilesetsBuffers: Map<MapTileset, Buffer>, options?: OptimizeBufferOptions | undefined) => Promise<OptimizedMapFiles>;
