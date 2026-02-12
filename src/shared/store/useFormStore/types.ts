import type { ContentType } from "../../../types/content.types"
import type { MetaBlockTypes } from "../../../templates/MetaFields"

export type TemplateBlock = ContentType & { id: string };

type ImageFileMap = Record<string, File>

export type FormState = {
  metaData: MetaBlockTypes
  blocks: ContentType[]
  images: ImageFileMap
  addBlock: (block: ContentType) => void
  updateBlock: (id: string, block: ContentType) => void
  getBlockById: (id: string) => ContentType | undefined
  removeBlockById: (id: string) => void
  addImage: (key: string, file: File) => void
  clearForm: () => void
  setMetadata: (data: MetaBlockTypes) => void
}

export const defaultFormState = {
  blocks: [],
  images: {},
  metaData: {
    title: "",
    description: "",
    slug: "",
    category: ""
  }
}