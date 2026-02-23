import type { TextFieldProps } from "@mui/material"

export type FieldLayoutProps = TextFieldProps & {
  width?: number | string
  preview?: boolean
  onFileChange?: (file: File | null) => void,
  file?: File | null
}
