import { Typography, Stack, Button } from "@mui/material"
import styles from "./styles.module.scss"
import type { FC } from "react"
import type { FieldBlockLayoutProps } from "./types"
import { useCallback, useState } from "react"
import { StyleEditor } from "../StylesWriter/StylesWriter"
import { useFormStore } from "../../shared/store/useFormStore"

export const FieldBlockLayout: FC<FieldBlockLayoutProps> = ({
  title = "",
  children,
  onSave,
  states = [],
  isStyling = true,
  id
}) => {
  const [stylesValue, setStylesValue] = useState("")
  const [stylesOpen, setStylesOpen] = useState(false)
  const [lastSavedSnapshot, setLastSavedSnapshot] = useState("")

  const { removeBlockById } = useFormStore()

  const currentSnapshot = JSON.stringify([stylesValue, ...states])

  const isSaved = currentSnapshot === lastSavedSnapshot

  const handleSave = () => {
    if (onSave) {
      onSave({ styles: stylesValue })
      setLastSavedSnapshot(currentSnapshot)
    }
  }

  const onClickStyling = () => {
    setStylesOpen((prev) => !prev)
  }

  const onClickRemove = useCallback(() => {
    if (id) removeBlockById(id)
  }, [removeBlockById, id])

  return (
    <div className={styles.container}>
      <Typography className={styles.title}>{title}</Typography>
      {children}

      <StyleEditor
        isOpen={stylesOpen}
        value={stylesValue}
        onChange={setStylesValue}
      />

      <Stack direction="row" width="100%" spacing={2}>
        {onSave && (
          <Button
            style={{ width: "100px", fontSize: 10 }}
            variant="contained"
            disabled={isSaved}
            onClick={handleSave}
          >
            Сохранить
          </Button>
        )}

        {isStyling && (
          <Button
            onClick={onClickStyling}
            style={{ width: "100px", fontSize: 10 }}
            variant={stylesOpen ? "contained" : "outlined"}
          >
            Стилизовать
          </Button>
        )}

        {id && (
          <Button
            style={{ width: "100px", fontSize: 10 }}
            onClick={onClickRemove}
            variant="outlined"
          >
            Удалить
          </Button>
        )}
      </Stack>
    </div>
  )
}
