import { z } from "zod";
export declare const isProperty: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    propertytype: z.ZodOptional<z.ZodString>;
    value: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    propertytype?: string | undefined;
    value?: unknown;
}, {
    name: string;
    type: string;
    propertytype?: string | undefined;
    value?: unknown;
}>;
export declare const isMapTilesetTileAnimation: z.ZodObject<{
    duration: z.ZodNumber;
    tileid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    duration: number;
    tileid: number;
}, {
    duration: number;
    tileid: number;
}>;
export declare const isMapTilesetTile: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
}>;
export declare type MapTilesetTile = z.infer<typeof isMapTilesetTile>;
export declare const isMapTileset: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
}>;
export declare type MapTileset = z.infer<typeof isMapTileset>;
export declare type MapLayer = {
    type?: string;
    layers?: MapLayer[];
    data?: number[];
};
export declare const isMapLayer: z.ZodType<MapLayer>;
export declare const isMap: z.ZodObject<{
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
    layers: z.ZodArray<z.ZodType<MapLayer, z.ZodTypeDef, MapLayer>, "many">;
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
    layers: MapLayer[];
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
    layers: MapLayer[];
}>;
export declare type Map = z.infer<typeof isMap>;
