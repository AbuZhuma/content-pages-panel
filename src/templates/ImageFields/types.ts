import type { BaseContentDataTemplate, BaseContentTemplate } from "../../types/content.types";

export type ImageContentType = BaseContentTemplate & {
    type: "IMAGE", 
    data: {
        source: BaseContentDataTemplate & {
            alt: string
        },
        imageKey: string
    }
}