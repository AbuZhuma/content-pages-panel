import { Button, Divider, Stack } from '@mui/material'
import { MetaFields } from '../../templates/MetaFields'
import TitleFields from '../../templates/TitleFields/TitleFields'
import ImageFields from '../../templates/ImageFields/ImageFields'
import { DropdownFields } from '../../templates/DropdownFields'
import { TextFields } from '../../templates/TextFields'
import { useFormStore } from '../../shared/store/useFormStore'

export const CreateForm = () => {
  const {blocks, images} = useFormStore()

  const onSubmit = () => {
    const formData = new FormData()

    formData.append(
      "data",
      JSON.stringify({
        slug: "about-with-image",
        category: "FOOTER",
        meta: {
          title: "О компании",
          description: "Описание",
        },
        content: blocks.map(block => {
          if (block.type !== "IMAGE") return block
          const { imageKey, ...rest } = block.data
          return {
            ...block,
            data: rest,
          }
        }),
      })
    )

    Object.values(images).forEach((file) => {
      formData.append("images", file)
    })
    console.log(blocks, images);
  }
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      <MetaFields />
      <TitleFields />
      <ImageFields />
      <DropdownFields />
      <TextFields />
      <Button variant="contained" onClick={onSubmit}>Создать</Button>
    </Stack>
  )
}