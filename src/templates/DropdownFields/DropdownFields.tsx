import { useState, type FC } from "react"
import { FieldBlockLayout } from "../../widgets/FieldBlockLayout"
import { FieldLayout } from "../../widgets/FieldLayout"
import type { FieldBlockProps } from "../../types/fieldBlockProps"
import type { DropdownContentType } from "./types"
import { useFormStore } from "../../shared/store/useFormStore"
import { buildSaveBlockFunc } from "../../shared/utils"

export const DropdownFields: FC<FieldBlockProps> = ({ id }) => {
  const block = useFormStore(
    (s) => s.getBlockById(id) as DropdownContentType
  )

  const [heading, setHeading] = useState(
    block?.data.heading.text ?? ""
  )

  const [inner, setInner] = useState(
    block?.data.inner.text ?? ""
  )

  const updateBlock = useFormStore((s) => s.updateBlock)


  const handleSave = ({ styles }: { styles: string }) => {
    buildSaveBlockFunc({
      block,
      id,
      styles,
      updateBlock,
      buildData: ({ trimmed, parsed }) => ({
        heading: {
          text: heading,
          ...(trimmed && parsed.heading && { styles: parsed.heading })
        },
        inner: {
          text: inner,
          ...(trimmed && parsed.inner && { styles: parsed.inner })
        }
      }),
    })
  }

  if (!block) return null
  return (
    <FieldBlockLayout key={id} id={id} states={[heading, inner]} title="Выподашка" onSave={handleSave}>
      <FieldLayout
        width={500}
        label="Заголовок"
        value={heading}
        onChange={(e) => setHeading(e.target.value)} />
      <FieldLayout
        width={900}
        multiline
        label="Текст выподашки"
        value={inner}
        onChange={(e) => setInner(e.target.value)} />
    </FieldBlockLayout>
  )
}