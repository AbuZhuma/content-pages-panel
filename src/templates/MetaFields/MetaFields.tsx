import { FieldBlockLayout } from "../../shared/ui/FieldBlockLayout"
import { FieldLayout } from "../../shared/ui/FieldLayout"

export const MetaFields = () => {
    return (
        <FieldBlockLayout title="Meta-данные">
            <FieldLayout width={500} label="Название"/>
            <FieldLayout multiline minRows={5} maxRows={10} width={900} label="Название"/>
        </FieldBlockLayout>
    )
}