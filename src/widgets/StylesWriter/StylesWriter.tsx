import { TextField, Stack } from "@mui/material"

type Props = {
    onChange: (val: string[]) => void
    value: string[],
    isOpen: boolean
}

export const StyleEditor = ({ onChange, value, isOpen }: Props) => {
    if (!isOpen) return
    return (
        <Stack spacing={2} width={500}>
            <TextField
                label="Стили"
                placeholder="color: red | font-size: 14px"
                multiline
                minRows={2}
                value={value}
                onChange={(e) => onChange(e.target.value.split("|"))}
            />
        </Stack>
    )
}
