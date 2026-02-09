import type { DropdownContentType } from "../templates/DropdownFields"
import type { ImageContentType } from "../templates/ImageFields/types"
import type { TextContentTypes } from "../templates/TextFields"
import type { TitleContentType } from "../templates/TitleFields"

export type BaseContentDataTemplate = {
    styles?: string
}

export type BaseContentTemplate = {
    type: ContentDataType
}

export type ContentDataType =   
  | "TITLE"
  | "TEXT"
  | "DROPDOWN"
  | "IMAGE"

export type ContentType =
  | TextContentTypes
  | TitleContentType
  | ImageContentType
  | DropdownContentType