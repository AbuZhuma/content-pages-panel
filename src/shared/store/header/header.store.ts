import { create } from "zustand";
import type { headerStoreTypes } from "./types";

export const useHeaderStore = create<headerStoreTypes>((set) => ({
    title: "Главное",
    setTitle: (data) => {
        set({title: data})
    }
}))
