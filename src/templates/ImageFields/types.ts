import type { BaseContentDataTemplate, BaseContentTemplate } from "../../types/content.types";

export type ImageContentType = BaseContentTemplate & {
    type: "IMAGE", 
    data: BaseContentDataTemplate & {
        source: string,
        imageKey: string
    }
}