import { FieldBlockLayout } from "../../shared/ui/FieldBlockLayout"
import { FieldLayout } from "../../shared/ui/FieldLayout"
import { useState } from "react"
import type { ContentType } from "../../types/content.types"
import { useFormStore } from "../../shared/store/useFormStore"

export const TextFields = () => {
  const [value, setValue] = useState("")
  const addBlock = useFormStore((state) => state.addBlock)

  const handleSave = () => {
    if (value.trim() === "") return
    const opt: ContentType = {
      type: "TEXT", data: {
        text: {
          text: value,
        }
      }
    }
    addBlock(opt)
  }


  return (
    <FieldBlockLayout title="Текст" onSave={handleSave}>
      <FieldLayout
        label="Введите текст"
        width={500}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FieldBlockLayout>
  )
}
