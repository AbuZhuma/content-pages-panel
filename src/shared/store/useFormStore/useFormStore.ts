import { create } from "zustand"
import type { ContentType } from "../../../types/content.types"

type ImageFileMap = Record<string, File>

export type FormState = {
  blocks: ContentType[]
  images: ImageFileMap
  addBlock: (block: ContentType) => void
  addImage: (key: string, file: File) => void
  resetBlocks: () => void
  removeLastBlock: () => void
}

export const useFormStore = create<FormState>((set) => ({
  blocks: [],
  images: {},
  addBlock: (block) =>
    set((state) => ({ blocks: [...state.blocks, block] })),
  addImage: (key, file) =>
    set((state) => ({
      images: {
        ...state.images,
        [key]: file,
      },
    })),
  resetBlocks: () => set({ blocks: [] }),
  removeLastBlock: () =>
    set((state) => ({ blocks: state.blocks.slice(0, -1) })),
}))
