import type { ReactNode } from "react";
import type { ContentType } from "../../types/content.types";

export interface FieldBlockLayoutProps {
    title?: string,
    children: ReactNode,
    onSave?: (data: {styles: string}) => void,
    states?: (string | File | null)[],
    isStyling?: boolean
    id?: string,
    block?: ContentType
}