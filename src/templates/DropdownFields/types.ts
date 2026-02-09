import type { BaseContentDataTemplate, BaseContentTemplate } from "../../types/content.types";

export type DropdownContentType = BaseContentTemplate & {
    type: "DROPDOWN",
    data: {
        heading: BaseContentDataTemplate & {
            text: string
        },
        inner: BaseContentDataTemplate & {
            text: string
        }
    }
}