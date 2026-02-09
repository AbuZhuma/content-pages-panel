import { nanoid } from "nanoid"
import { useState } from "react"
import { useFormStore } from "../../shared/store/useFormStore"
import { FieldBlockLayout } from "../../shared/ui/FieldBlockLayout"
import { FieldLayout } from "../../shared/ui/FieldLayout"

const ImageFields = () => {
  const addBlock = useFormStore(s => s.addBlock)
  const addImage = useFormStore(s => s.addImage)
  const blocks = useFormStore()

  const [file, setFile] = useState<File | null>(null)
  const [alt, setAlt] = useState("")
  const [imageKey] = useState(() => nanoid())

  const onImageChange = (selected: File | null) => {
    if (!selected) return
    setFile(selected)
  }

  const handleSave = () => {
    if (!file) return
    addImage(imageKey, file)
    addBlock({
      type: "IMAGE",
      data: {
        source: {
          alt
        },
        imageKey,
      },
    })
    console.log(blocks);
    
  }

  return (
    <FieldBlockLayout title="Картинка" onSave={handleSave}>
      <FieldLayout
        width={500}
        type="image"
        label="Обложка"
        onFileChange={onImageChange}
      />

      <FieldLayout
        label="Описание картинки"
        width={500}
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
      />
    </FieldBlockLayout>
  )
}

export default ImageFields
