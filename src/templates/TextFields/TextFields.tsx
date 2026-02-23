import { useState, type FC } from "react"
import { FieldBlockLayout } from "../../widgets/FieldBlockLayout"
import { FieldLayout } from "../../widgets/FieldLayout"
import type { FieldBlockProps } from "../../types/fieldBlockProps"
import { useFormStore } from "../../shared/store/useFormStore"
import type { TextContentTypes } from "../TextFields"
import { buildSaveBlockFunc } from "../../shared/utils"

export const TextFields: FC<FieldBlockProps> = ({ id }) => {
  const block = useFormStore(
    (s) => s.getBlockById(id) as TextContentTypes
  )

  const [value, setValue] = useState(block.data.text.text ?? "")

  const updateBlock = useFormStore((s) => s.updateBlock)
  const handleSave = ({ styles }: { styles: string }) => {
    buildSaveBlockFunc({
      block,
      id,
      styles,
      updateBlock,
      buildData: ({ trimmed, parsed }) => ({
        text: {
          text: value,
          ...(trimmed && parsed.text && { styles: parsed.text }),
        },
      }),
    })
  }

  return (
    <FieldBlockLayout
      block={block}
      title="Текст"
      key={id}
      id={id}
      onSave={handleSave}
      states={[value]}
    >
      <FieldLayout
        label="Введите текст"
        multiline
        width={900}
        value={value}
        minRows={1}
        onChange={(e) => setValue(e.target.value)}
      />
    </FieldBlockLayout>
  )
}
