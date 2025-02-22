// These are the default values that nodes get when they are created using the API, not via the editor. They are then used to make sure that these props and values are added to nodes created using


const exportPropValues = {
    exportSettings: []
}

const prototypingPropValues = {
    overflowDirection: "NONE",
    numberOfFixedChildren: 0
}

const sceneNodePropValues = {
    visible: true,
    locked: false
}

const containerPropValues = {
    expanded: true,
    backgrounds: [
        {
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: {
                r: 1,
                g: 1,
                b: 1
            }
        }
    ]
}

const cornerPropValues = {
    cornerRadius: 0,
    cornerSmoothing: 0,
    topLeftRadius: 0,
    topRightRadius: 0,
    bottomLeftRadius: 0,
    bottomRightRadius: 0
}

const layoutPropValues = {
    absoluteTransform: [],
    relativeTransform: [],
    x: 0,
    y: 0,
    rotation: 0,
    width: 0,
    height: 0,

    constrainProportions: false,
    constraints: {
        horizontal: "MIN",
        vertical: "MIN"
    },
    layoutAlign: "INHERIT",
    layoutGrow: 0
}

const geometryPropValues = {
    fills: [{
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
            r: 1,
            g: 1,
            b: 1
        }
    }],
    // strokes: [], Despite being default, it's needed for vectors?
    strokeWeight: 1,
    strokeMiterLimit: 4,
    strokeAlign: "INSIDE",
    strokeCap: "NONE",
    strokeJoin: "MITER",
    dashPattern: [],
    fillStyleId: "",
    strokeStyleId: ""
}

const textPropValues = {
    fontSize: 12,
    hasMissingFont: false,
    paragraphIndent: 0,
    paragraphSpacing: 0,
    textAlignHorizontal: "LEFT",
    textAlignVertical: "TOP",
    textAutoResize: "WIDTH_AND_HEIGHT",
    textCase: "ORIGINAL",
    textDecoration: "NONE",
    textStyleId: "",
    letterSpacing: {
        unit: "PERCENT",
        value: 0
    },
    characters: "",
    autoRename: true
}

const baseFramePropValues = {
    ...containerPropValues,
    ...layoutPropValues,
    layoutMode: "NONE",
    primaryAxisSizingMode: "AUTO",
    counterAxisSizingMode: "FIXED",

    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "MIN",

    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    itemSpacing: 0,

    // verticalPadding: 0,
    // horizontalPadding: 0,

    layoutGrids: [],
    gridStyleId: "",
    clipsContent: true,
    guides: []
}

const blendPropValues = {
    opacity: 1,
    blendMode: "PASS_THROUGH",
    isMask: false,
    effects: []
}

export const defaultPropValues: {} = {
    "FRAME": {
        "name": "Frame",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "relativeTransform": [
            [1, 0, 0],
            [0, 1, 0]
        ],
        "absoluteTransform": [
            [1, 0, 0],
            [0, 1, 0]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "topLeftRadius": 0,
        "topRightRadius": 0,
        "bottomLeftRadius": 0,
        "bottomRightRadius": 0,
        "paddingLeft": 0,
        "paddingRight": 0,
        "paddingTop": 0,
        "paddingBottom": 0,
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "primaryAxisSizingMode": "AUTO",
        "layoutGrids": [],
        "backgrounds": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                }
            }
        ],
        "clipsContent": true,
        "guides": [],
        "expanded": true,
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "layoutMode": "NONE",
        "counterAxisSizingMode": "FIXED",
        "itemSpacing": 0,
        "overflowDirection": "NONE",
        "numberOfFixedChildren": 0,
        "overlayPositionType": "CENTER",
        "overlayBackground": {
            "type": "NONE"
        },
        "overlayBackgroundInteraction": "NONE",
        "reactions": []
    },
    "GROUP": {
    },
    "SLICE": {
        "name": "Slice",
        "visible": true,
        "locked": false,
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": []
    },
    "BOOLEAN_OPERATION": {
    },
    "RECTANGLE": {
        "name": "Rectangle",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0.7686274647712708,
                    "g": 0.7686274647712708,
                    "b": 0.7686274647712708
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "topLeftRadius": 0,
        "topRightRadius": 0,
        "bottomLeftRadius": 0,
        "bottomRightRadius": 0,
        "reactions": []
    },
    "LINE": {
        "name": "Line",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [],
        "strokes": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                }
            }
        ],
        "strokeWeight": 1,
        "strokeAlign": "CENTER",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 0,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "reactions": []
    },
    "ELLIPSE": {
        "name": "Ellipse",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0.7686274647712708,
                    "g": 0.7686274647712708,
                    "b": 0.7686274647712708
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "arcData": {
            "startingAngle": 0,
            "endingAngle": 6.2831854820251465,
            "innerRadius": 0
        },
        "reactions": []
    },
    "POLYGON": {
        "name": "Polygon",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0.7686274647712708,
                    "g": 0.7686274647712708,
                    "b": 0.7686274647712708
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "pointCount": 3,
        "reactions": []
    },
    "STAR": {
        "name": "Star",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0.7686274647712708,
                    "g": 0.7686274647712708,
                    "b": 0.7686274647712708
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "pointCount": 5,
        "innerRadius": 0.3819660246372223,
        "reactions": []
    },
    "VECTOR": {
        "name": "Vector",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [],
        "strokes": [
            {
                "type": "SOLID",
                "visible": true,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 0,
                    "g": 0,
                    "b": 0
                }
            }
        ],
        "strokeWeight": 1,
        "strokeAlign": "CENTER",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "vectorNetwork": {
            "regions": [

            ],
            "segments": [

            ],
            "vertices": [

            ]
        },
        "vectorPaths": [],
        "handleMirroring": "NONE",
        "reactions": []
    },
    "TEXT": {
        "name": "Text",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "fills": [{
            "type": "SOLID",
            "visible": true,
            "opacity": 1,
            "blendMode": "NORMAL",
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "OUTSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "relativeTransform": [
            [1, 0, 0],
            [0, 1, 0]
        ],
        "absoluteTransform": [
            [1, 0, 0],
            [0, 1, 0]
        ],
        "x": 0,
        "y": 0,
        "width": 0,
        "height": 14,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "hasMissingFont": false,
        "autoRename": true,
        "fontSize": 12,
        "paragraphIndent": 0,
        "paragraphSpacing": 0,
        "textAlignHorizontal": "LEFT",
        "textAlignVertical": "TOP",
        "textCase": "ORIGINAL",
        "textDecoration": "NONE",
        "textAutoResize": "", // It's actually WIDTH_AND_HEIGHT but when node is resizes, it gets reset, so we add it anyway
        "letterSpacing": {
            "unit": "PERCENT",
            "value": 0
        },
        "lineHeight": {
            "unit": "AUTO"
        },
        "fontName": {
            "family": "Roboto",
            "style": "Regular"
        },
        "reactions": []
    },
    "COMPONENT": {
        "name": "Component",
        "visible": true,
        "locked": false,
        "opacity": 1,
        "blendMode": "PASS_THROUGH",
        "isMask": false,
        "effects": [],
        "relativeTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "absoluteTransform": [
            [
                1,
                0,
                0
            ],
            [
                0,
                1,
                0
            ]
        ],
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "layoutAlign": "INHERIT",
        "constrainProportions": false,
        "layoutGrow": 0,
        "exportSettings": [],
        "fills": [
            {
                "type": "SOLID",
                "visible": false,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                }
            }
        ],
        "strokes": [],
        "strokeWeight": 1,
        "strokeAlign": "INSIDE",
        "strokeCap": "NONE",
        "strokeJoin": "MITER",
        "strokeMiterLimit": 4,
        "dashPattern": [],
        "cornerRadius": 0,
        "cornerSmoothing": 0,
        "topLeftRadius": 0,
        "topRightRadius": 0,
        "bottomLeftRadius": 0,
        "bottomRightRadius": 0,
        "paddingLeft": 0,
        "paddingRight": 0,
        "paddingTop": 0,
        "paddingBottom": 0,
        "primaryAxisAlignItems": "MIN",
        "counterAxisAlignItems": "MIN",
        "primaryAxisSizingMode": "AUTO",
        "layoutGrids": [],
        "backgrounds": [
            {
                "type": "SOLID",
                "visible": false,
                "opacity": 1,
                "blendMode": "NORMAL",
                "color": {
                    "r": 1,
                    "g": 1,
                    "b": 1
                }
            }
        ],
        "clipsContent": false,
        "guides": [],
        "expanded": true,
        "constraints": {
            "horizontal": "MIN",
            "vertical": "MIN"
        },
        "layoutMode": "NONE",
        "counterAxisSizingMode": "FIXED",
        "itemSpacing": 0,
        "overflowDirection": "NONE",
        "numberOfFixedChildren": 0,
        "overlayPositionType": "CENTER",
        "overlayBackground": {
            "type": "NONE"
        },
        "overlayBackgroundInteraction": "NONE",
        "remote": false,
        "reactions": []
    },
    "COMPONENT_SET": {
    },
    "INSTANCE": {
        "x": 0,
        "y": 0,
        "scaleFactor": 1
    }
}

export const readOnlyProps: string[] = [
    'id',
    'parent',
    'removed',
    'children',
    'width',
    'height',
    'overlayPositionType',
    'overlayBackground',
    'overlayBackgroundInteraction',
    'reactions',
    'remote',
    'key',
    'type',
    'defaultVariant',
    'hasMissingFont',
    'characters', // Not a readonly prop
    // 'relativeTransform', // Need to check if same as default x y coordinates to avoid unnecessary code
    'absoluteTransform',
    // 'horizontalPadding', // Not a readonly prop, just want to ignore
    // 'verticalPadding', // Not a readonly prop, just want to ignore
    'mainComponent', // Not a readonly prop, just want to ignore
    'masterComponent' // Not a readonly prop, just want to ignore

]

export const textProps: string[] = [
    'characters',
    'fontSize',
    'fontName',
    'textStyleId',
    'textCase',
    'textDecoration',
    'letterSpacing',
    'lineHeight',
    'textAlignVertical',
    'textAlignHorizontal',
	'textAutoResize',
	'listSpacing'
]

export const styleProps: string[] = [
    'fillStyleId',
    'strokeStyleId',
    'textStyleId',
    'effectStyleId',
    'gridStyleId',
    'backgroundStyleId'
]

export var dynamicProps = [
    'width',
    'height'
]
