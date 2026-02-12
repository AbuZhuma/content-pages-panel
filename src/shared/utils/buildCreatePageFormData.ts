import type { ContentType } from "../../types/content.types"

type Params = {
  blocks: ContentType[]
  images: Record<string, File>
  metaData: {
    slug: string
    category: string
    title: string
    description: string
  }
}

export function buildCreatePageFormData({
  blocks,
  images,
  metaData,
}: Params): FormData {
  const formData = new FormData()

  const content = blocks.map((block) => {
    if (block.type !== "IMAGE") {
      return block
    }
    const { imageKey, ...rest } = block.data

    const file = images[imageKey]
    if (file) {
      formData.append("images", file)
    }

    return {
      ...block,
      data: rest,
    }
  })

  const data = {
    slug: metaData.slug,
    category: metaData.category,
    meta: {
      title: metaData.title,
      description: metaData.description,
    },
    content,
  }

  formData.append("data", JSON.stringify(data))

  return formData
}
