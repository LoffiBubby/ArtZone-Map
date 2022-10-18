/// <reference types="node" />
import { z } from "zod";
export declare enum LogLevel {
    NONE = 0,
    NORMAL = 1,
    VERBOSE = 2
}
declare const isOptimizeBufferOptions: z.ZodObject<{
    tile: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        size?: number | undefined;
    }, {
        size?: number | undefined;
    }>>;
    logs: z.ZodOptional<z.ZodNativeEnum<typeof LogLevel>>;
    output: z.ZodOptional<z.ZodObject<{
        tileset: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                width?: number | undefined;
                height?: number | undefined;
            }, {
                width?: number | undefined;
                height?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }, {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
export declare type OptimizeBufferOptions = z.infer<typeof isOptimizeBufferOptions>;
declare const isOptimizeOptions: z.ZodObject<z.extendShape<{
    tile: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        size?: number | undefined;
    }, {
        size?: number | undefined;
    }>>;
    logs: z.ZodOptional<z.ZodNativeEnum<typeof LogLevel>>;
    output: z.ZodOptional<z.ZodObject<{
        tileset: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                width?: number | undefined;
                height?: number | undefined;
            }, {
                width?: number | undefined;
                height?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }, {
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }>>;
}, {
    output: z.ZodOptional<z.ZodObject<{
        map: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
        }, {
            name?: string | undefined;
        }>>;
        path: z.ZodOptional<z.ZodString>;
        tileset: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodObject<{
                width: z.ZodOptional<z.ZodNumber>;
                height: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                width?: number | undefined;
                height?: number | undefined;
            }, {
                width?: number | undefined;
                height?: number | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }, {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }, {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    tile?: {
        size?: number | undefined;
    } | undefined;
    logs?: LogLevel | undefined;
    output?: {
        map?: {
            name?: string | undefined;
        } | undefined;
        path?: string | undefined;
        tileset?: {
            name?: string | undefined;
            size?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
export declare type OptimizeOptions = z.infer<typeof isOptimizeOptions>;
declare const isOptimizedMapFiles: z.ZodObject<{
    map: z.ZodObject<{
        tilesets: z.ZodArray<z.ZodObject<{
            columns: z.ZodNumber;
            firstgid: z.ZodNumber;
            image: z.ZodString;
            imageheight: z.ZodNumber;
            imagewidth: z.ZodNumber;
            margin: z.ZodNumber;
            name: z.ZodString;
            properties: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
                propertytype: z.ZodOptional<z.ZodString>;
                value: z.ZodUnknown;
            }, "passthrough", z.ZodTypeAny, {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }, {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }>, "many">>;
            spacing: z.ZodNumber;
            tilecount: z.ZodNumber;
            tileheight: z.ZodNumber;
            tilewidth: z.ZodNumber;
            tiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                animation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    duration: z.ZodNumber;
                    tileid: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    tileid: number;
                }, {
                    duration: number;
                    tileid: number;
                }>, "many">>;
                id: z.ZodNumber;
                properties: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    type: z.ZodString;
                    propertytype: z.ZodOptional<z.ZodString>;
                    value: z.ZodUnknown;
                }, "passthrough", z.ZodTypeAny, {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }, {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }>, "many">>;
            }, "passthrough", z.ZodTypeAny, {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }, {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }>, "many">>;
        }, "passthrough", z.ZodTypeAny, {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }, {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }>, "many">;
        type: z.ZodLiteral<"map">;
        tileheight: z.ZodNumber;
        tilewidth: z.ZodNumber;
        properties: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            propertytype: z.ZodOptional<z.ZodString>;
            value: z.ZodUnknown;
        }, "passthrough", z.ZodTypeAny, {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }, {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }>, "many">>;
        layers: z.ZodArray<z.ZodType<import("./mapGuards").MapLayer, z.ZodTypeDef, import("./mapGuards").MapLayer>, "many">;
    }, "strip", z.ZodTypeAny, {
        tilesets: {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }[];
        type: "map";
        tileheight: number;
        tilewidth: number;
        properties?: {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }[] | undefined;
        layers: import("./mapGuards").MapLayer[];
    }, {
        tilesets: {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }[];
        type: "map";
        tileheight: number;
        tilewidth: number;
        properties?: {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }[] | undefined;
        layers: import("./mapGuards").MapLayer[];
    }>;
    tilesetsBuffer: z.ZodMap<z.ZodString, z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
}, "strip", z.ZodTypeAny, {
    map: {
        tilesets: {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }[];
        type: "map";
        tileheight: number;
        tilewidth: number;
        properties?: {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }[] | undefined;
        layers: import("./mapGuards").MapLayer[];
    };
    tilesetsBuffer: Map<string, Buffer>;
}, {
    map: {
        tilesets: {
            columns: number;
            firstgid: number;
            image: string;
            imageheight: number;
            imagewidth: number;
            margin: number;
            name: string;
            properties?: {
                name: string;
                type: string;
                propertytype?: string | undefined;
                value?: unknown;
            }[] | undefined;
            spacing: number;
            tilecount: number;
            tileheight: number;
            tilewidth: number;
            tiles?: {
                animation?: {
                    duration: number;
                    tileid: number;
                }[] | undefined;
                id: number;
                properties?: {
                    name: string;
                    type: string;
                    propertytype?: string | undefined;
                    value?: unknown;
                }[] | undefined;
            }[] | undefined;
        }[];
        type: "map";
        tileheight: number;
        tilewidth: number;
        properties?: {
            name: string;
            type: string;
            propertytype?: string | undefined;
            value?: unknown;
        }[] | undefined;
        layers: import("./mapGuards").MapLayer[];
    };
    tilesetsBuffer: Map<string, Buffer>;
}>;
export declare type OptimizedMapFiles = z.infer<typeof isOptimizedMapFiles>;
export {};
