import type { BaseContentDataTemplate, BaseContentTemplate } from "../../types/content.types";

export type TitleContentType = BaseContentTemplate & {
    type: "TITLE"
    data: {
        text: BaseContentDataTemplate & {
            text: string
        }
    }
}