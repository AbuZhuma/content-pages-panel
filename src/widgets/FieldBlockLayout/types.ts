import type { ReactNode } from "react";

export interface FieldBlockLayoutProps {
    title?: string,
    children: ReactNode,
    onSave?: (data: {styles: string}) => void,
    states?: (string | File | null)[],
    isStyling?: boolean
    id?: string
}