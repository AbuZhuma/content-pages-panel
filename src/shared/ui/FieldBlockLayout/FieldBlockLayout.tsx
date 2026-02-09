import { Typography, Stack, Button } from "@mui/material"
import styles from "./styles.module.scss"
import type { FC } from "react"
import type { FieldBlockLayoutProps } from "./types"
import { useEffect, useState } from "react"
import { StyleEditor } from "../../../widgets/StylesWriter/StylesWriter"

export const FieldBlockLayout: FC<FieldBlockLayoutProps> = ({
  title = "",
  children,
  onSave,
}) => {
  const [saved, setSaved] = useState(false)
  const [stylesValue, setStylesValue] = useState<string[]>([])
  const [stylesOpen] = useState(false)

  const handleSave = () => {
    if (onSave) {
      onSave({ styles: stylesValue })
      setSaved(true)
    }
  }

  useEffect(() => {
    setSaved(false)
  }, [stylesValue])
  return (
    <div className={styles.container}>
      <Typography className={styles.title}>{title}</Typography>
      {children}
      <StyleEditor isOpen={stylesOpen} value={stylesValue} onChange={setStylesValue} />
      <Stack direction="row" spacing={2}>
        {onSave && (
          <Button style={{ width: "100px", fontSize: 10 }} variant="contained" disabled={saved} color="primary" onClick={handleSave}>
            Сохранить
          </Button>
        )}
        {/* <Button style={{ width: "100px", fontSize: 10 }} variant={stylesOpen ? "contained" :"outlined"} onClick={() => setStylesOpen(!stylesOpen)}>
          Стилизовать
        </Button> */}
      </Stack>
    </div>
  )
}
