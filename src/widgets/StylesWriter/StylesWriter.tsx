import { Stack, Paper, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { FieldLayout } from "../FieldLayout"
import { useStyles } from "../../shared/store/useStyles"
import { useMemo, useState } from "react"

type Props = {
  onChange: (val: string) => void
  value: string
  isOpen: boolean
}

export const StyleEditor = ({ onChange, value, isOpen }: Props) => {
  const { styles } = useStyles()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const options = useMemo(() => {
    const words = value.split(" ")
    const lastWord = words[words.length - 1]

    if (!lastWord) return []

    return styles.filter((s) => s.startsWith(lastWord))
  }, [value, styles])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!options.length) return

    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % options.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length)
    } else if (e.key === "Enter") {
      e.preventDefault()
      const words = value.split(" ")
      words[words.length - 1] = options[activeIndex]
      onChange(words.join(" "))
    }
  }

  if (!isOpen) return null
  
  return (
    <Stack spacing={2} width={600} onKeyDown={handleKeyDown}>
      <FieldLayout
        label="Стили"
        multiline
        minRows={2}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          setActiveIndex(0) 
        }}
      />

      {options.length > 0 && (
        <Paper elevation={3} style={{ maxHeight: "500px", overflowX: "auto" }}>
          <List dense>
            {options.map((opt, idx) => (
              <ListItem key={opt} disablePadding>
                <ListItemButton
                  selected={idx === activeIndex}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    const words = value.split(" ")
                    words[words.length - 1] = opt
                    onChange(words.join(" "))
                  }}
                >
                  <ListItemText primary={opt} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Stack>
  )
}
