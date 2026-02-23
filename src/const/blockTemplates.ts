import type { ContentDataType, ContentType } from "../types/content.types";

export const BLOCK_TEMPLATES: Record<ContentDataType, ContentType> = {
    "TEXT": {
        id: "",
        type: "TEXT",
        data: {
            text: {
                text: ""
            }
        }
    },
    "IMAGE": {
        id: "",
        type: "IMAGE",
        data: {
            source: "",
            imageKey: ""
        }
    },
    "DROPDOWN": {
        id: "",
        type: "DROPDOWN",
        data: {
            heading: {
                text: ""
            },
            inner: {
                text: ""
            }
        }
    }
}   