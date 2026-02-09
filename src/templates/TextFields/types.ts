import type { BaseContentDataTemplate, BaseContentTemplate } from "../../types/content.types";

export type TextContentTypes = BaseContentTemplate & {
    type: "TEXT",
    data: {
        text: BaseContentDataTemplate & {
            text: string
        }
    }
}