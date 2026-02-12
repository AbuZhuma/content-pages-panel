import { Box, TextField } from "@mui/material"
import type { FC, ChangeEvent } from "react"
import { useEffect, useState } from "react"
import type { FieldLayoutProps } from "./types"

export const FieldLayout: FC<FieldLayoutProps> = ({
  width = "100%",
  multiline = false,
  minRows,
  maxRows,
  type,
  preview = true,
  onFileChange,
  ...rest
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview)
    }
  }, [imagePreview])

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null

    onFileChange?.(file)
      
    if (!file) {
      setImagePreview(null)
      return
    }

    const url = URL.createObjectURL(file)
    setImagePreview(url)
  }

  if (type === "image") {
    return (
      <Box width={width} display="flex" flexDirection="column" gap={1}>
        <TextField
          type="file"
          fullWidth
          inputProps={{ accept: "image/*" }}
          onChange={handleImageChange}
        />

        {preview && imagePreview && (
          <Box
            component="img"
            src={imagePreview}
            alt="preview"
            sx={{
              width: "100%",
              maxHeight: 300,
              objectFit: "contain",
              borderRadius: 2,
              border: "1px solid #e0e0e0",
            }}
          />
        )}
      </Box>
    )
  }
  return (
    <Box width={width}>
      <TextField
        fullWidth
        type={type}
        multiline={multiline}
        minRows={multiline ? minRows ?? 3 : undefined}
        maxRows={multiline ? maxRows : undefined}
        {...rest}
      />
    </Box>
  )
}
