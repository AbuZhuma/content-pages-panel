import type { FC } from "react";
import type { ContentDataType } from "../../types/content.types";
import { DropdownFields } from "../../templates/DropdownFields";
import { TextFields } from "../../templates/TextFields";
import type { FieldBlockProps } from "../../types/fieldBlockProps";
import { ImageFields } from "../../templates/ImageFields";
import { TitleFields } from "../../templates/TitleFields";


export const templatesMap: Record<ContentDataType,{component: FC<FieldBlockProps> }> = {
    "DROPDOWN": {
        component: DropdownFields
    },
    "IMAGE": {
        component: ImageFields
    },
    "TEXT": {
        component: TextFields
    }, 
    "TITLE": {
        component: TitleFields
    }
}
