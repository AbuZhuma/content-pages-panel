import type { MetaBlockTypes } from "../templates/MetaFields";
import type { ContentType } from "./content.types";

export type PageInputType = MetaBlockTypes & {
    data: ContentType[]
}

export type PageOutType = {
    id: string,
    meta: {
        title: string,
        description: string,
    },
    slug: string,
    category: string
    content: ContentType[]
}           