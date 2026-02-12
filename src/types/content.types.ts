import type { DropdownContentType } from "../templates/DropdownFields"
import type { ImageContentType } from "../templates/ImageFields/types"
import type { TextContentTypes } from "../templates/TextFields"
import type { TitleContentType } from "../templates/TitleFields"

export type BaseContentDataTemplate = {
  styles?: string
}

export type BaseContentTemplate = {
  id: string,
  type: ContentDataType
}

export type CategoryType =
  | "FOOTER"
  | "BLOG"

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

export const TemplatesMap: { type: ContentDataType; label: string }[] = [
  { type: "TITLE", label: "Заголовок" },
  { type: "TEXT", label: "Текст" },
  { type: "DROPDOWN", label: "Выпадающий список" },
  { type: "IMAGE", label: "Изображение" },
];

export const CategoryMap: { type: CategoryType, label: string }[] = [
  { type: "BLOG", label: "Блог" },
  { type: "FOOTER", label: "Подвал" }
]

export const CategorySet:Record<CategoryType, string> = {
  "FOOTER": "Подвал",
  "BLOG": "Блог"
}