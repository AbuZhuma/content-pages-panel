import { useState } from "react"
import { useFormStore } from "../../shared/store/useFormStore"
import { FieldBlockLayout } from "../../shared/ui/FieldBlockLayout"
import { FieldLayout } from "../../shared/ui/FieldLayout"
import type { ContentType } from "../../types/content.types"

const TitleFields = () => {
  const addBlock = useFormStore((state) => state.addBlock)
  const [value, setValue] = useState("")

  const handleSave = () => {
    if (value.trim() === "") return
    const opt:ContentType = {
      type: "TITLE", data: {
        text: {
          text: value,
        }
      }
    }
    addBlock(opt)
  }

  return (
    <FieldBlockLayout
      title="Заголовок"
      onSave={handleSave}
    >
      <FieldLayout
        width={500}
        label="Название"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    </FieldBlockLayout>
  )
}

export default TitleFields
