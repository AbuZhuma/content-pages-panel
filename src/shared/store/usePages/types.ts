import type { PageOutType } from "../../../types/page.types"

export type PagesStoreTypes = {
    pages: PageOutType[],
    getPages: () => void,
    deletePage: (id: string) => void
}