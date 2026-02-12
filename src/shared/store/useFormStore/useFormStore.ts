import { create } from "zustand"
import { defaultFormState, type FormState } from "./types"

export const useFormStore = create<FormState>((set, get) => ({
  metaData: {
    title: "",
    description: "",
    slug: "",
    category: ""
  },
  blocks: [],
  images: {},
  addBlock: (block) =>
    set((state) => ({ blocks: [...state.blocks, block] })),
  updateBlock: (id, block) => {
    const blocks = get().blocks.map((el) => {
      if (el.id === id) {
        return block
      }
      return el
    })
    set({ blocks: blocks })
  },
  getBlockById: (id) => {
    return get().blocks.find((block) => block.id === id)
  },
  removeBlockById: (id) => {
    const removed = get().blocks.filter(el => el.id !== id)
    set({blocks: removed})
  },
  addImage: (key, file) =>
    set((state) => ({
      images: {
        ...state.images,
        [key]: file,
      },
    })),
  clearForm: () => set(defaultFormState),
  setMetadata: (data) => {
    set({ metaData: data })
  }
}))
