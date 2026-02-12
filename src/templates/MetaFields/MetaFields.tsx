import { MenuItem, TextField } from "@mui/material"
import { useFormStore } from "../../shared/store/useFormStore"
import { FieldBlockLayout } from "../../widgets/FieldBlockLayout"
import { FieldLayout } from "../../widgets/FieldLayout"
import { CategoryMap } from "../../types/content.types"

export const MetaFields = () => {
    const { setMetadata, metaData } = useFormStore()

    const onChange = (value: string, key: "title" | "description" | "slug" | "category") => {
        setMetadata({
            ...metaData,
            [key]: value,
        })
    }

    return (
        <FieldBlockLayout title="Meta-данные" isStyling={false}>
            <FieldLayout
                value={metaData.slug}
                width={500}
                label="Маска для ссылки"
                onChange={(e) => onChange(e.target.value, "slug")}
            />
            <FieldLayout
                value={metaData.title}
                width={500}
                label="Название"
                onChange={(e) => onChange(e.target.value, "title")}
            />
            <TextField
                select
                label="Категория"
                value={metaData.category || ""}
                onChange={(e) => onChange(e.target.value, "category")}
                style={{ width: 500, marginTop: 16 }}
            >
                {CategoryMap.map((c) => (
                    <MenuItem key={c.type} value={c.type}>
                        {c.label}
                    </MenuItem>
                ))}
            </TextField>
            <FieldLayout
                value={metaData.description}
                multiline
                minRows={5}
                maxRows={10}
                width={900}
                label="Описание"
                onChange={(e) => onChange(e.target.value, "description")}
            />
        </FieldBlockLayout>
    )
}
