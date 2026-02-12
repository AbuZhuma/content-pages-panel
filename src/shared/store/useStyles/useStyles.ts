import { create } from "zustand";
import type { UseStylesStoreTypes } from "./types";
import { getStyles } from "../../../services/getStyles";

export const useStyles = create<UseStylesStoreTypes>((set) => ({
    styles: [],
    getStyles: async() => {
        const res = await getStyles()
        set({styles: res})
    }
}))