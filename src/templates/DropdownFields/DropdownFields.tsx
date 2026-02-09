import { useState } from "react"
import { useFormStore } from "../../shared/store/useFormStore"
import { FieldBlockLayout } from "../../shared/ui/FieldBlockLayout"
import { FieldLayout } from "../../shared/ui/FieldLayout"
import type { ContentType } from "../../types/content.types"

export const DropdownFields = () => {
  const addBlock = useFormStore((state) => state.addBlock)
  const [heading, setHeading] = useState("")
  const [inner, setInner] = useState("")

  const handleSave = () => {
    if (heading.trim() === "" || inner.trim() === "") return
    const opt: ContentType = {
      type: "DROPDOWN",
      data: {
        heading: {
          text: heading,
        },
        inner: {
          text: inner
        }
      }
    }
    addBlock(opt)
  }

  return (
    <FieldBlockLayout title="Выподашка" onSave={handleSave}>
      <FieldLayout
        width={500}
        label="Заголовок"
        value={heading}
        onChange={(e) => setHeading(e.target.value)} />
      <FieldLayout
        width={900}
        label="Текст выподашки"
        value={heading}
        onChange={(e) => setInner(e.target.value)} />
    </FieldBlockLayout>
  )
}