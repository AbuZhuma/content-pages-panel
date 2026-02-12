import { useState, type FC } from "react"
import { useFormStore } from "../../shared/store/useFormStore"
import { FieldBlockLayout } from "../../widgets/FieldBlockLayout"
import { FieldLayout } from "../../widgets/FieldLayout"
import type { FieldBlockProps } from "../../types/fieldBlockProps"
import type { ImageContentType } from "./types"
import { uuid } from "../../shared/utils/uuid"
import { buildSaveBlockFunc } from "../../shared/utils"

export const ImageFields: FC<FieldBlockProps> = ({ id }) => {
  const addImage = useFormStore(s => s.addImage)
  const [file, setFile] = useState<File | null>(null)
  const updateBlock = useFormStore((s) => s.updateBlock)
  const block = useFormStore(
    (s) => s.getBlockById(id) as ImageContentType
  )

  const onImageChange = (selected: File | null) => {
    if (!selected) return
    setFile(selected)
  }

  const handleSave = ({ styles }: { styles: string }) => {
    if (!file || !block) return

    const key = uuid()
    addImage(key, file)

    buildSaveBlockFunc({
      block,
      id,
      styles,
      updateBlock,
      buildData: ({ trimmed, parsed }) => ({
        source: "",
        imageKey: key,
        ...(trimmed && parsed.img && { styles: parsed.img }),
      }),
    })
  }

  return (
    <FieldBlockLayout title="Картинка" id={id} states={[file]} onSave={handleSave}>
      <FieldLayout
        width={600}
        type="image"
        label="Картинки"
        onFileChange={onImageChange}
      />
    </FieldBlockLayout>
  )
}
