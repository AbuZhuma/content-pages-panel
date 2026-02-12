import { create } from "zustand";
import type { PagesStoreTypes } from "./types";
import { getPages } from "../../../services/getPages";
import { deletePage } from "../../../services/deletePage";

export const usePages = create<PagesStoreTypes>((set, get) => ({
    pages: [],
    getPages: async () => {
        const pages = await getPages()
        set({pages: pages})
    },
    deletePage: async(id) => {
        deletePage(id)
        const newPages = get().pages.filter(el=> el.id !== id)
        set({pages: newPages})
    }
})) 