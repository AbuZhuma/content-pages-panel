import { Button, Divider, Stack } from '@mui/material'
import { MetaFields } from '../../templates/MetaFields'
import { useFormStore } from '../../shared/store/useFormStore'
import type { ContentDataType } from '../../types/content.types'
import { templatesMap } from '../../shared/configs/templates.config'
import { BLOCK_TEMPLATES } from '../../const/blockTemplates'
import { uuid } from '../../shared/utils/uuid'
import { createPage } from '../../services/createPage'
import { buildCreatePageFormData } from '../../shared/utils/buildCreatePageFormData'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddTemplate } from '../../widgets/AddTemplate'

export const CreateForm = () => {
  const { blocks, images, metaData, addBlock, clearForm } = useFormStore()
  const navigate = useNavigate()

  const onSuccess = useCallback(() => {
    clearForm()
    navigate("/")
  }, [clearForm, navigate])

  const onSubmit = () => {
    const formData = buildCreatePageFormData({
      blocks,
      images,
      metaData,
    })

    createPage({ data: formData, onSuccess })
  }


  const onAdd = (type: ContentDataType) => {
    const id = uuid()
    addBlock({ ...BLOCK_TEMPLATES[type], id: id })
  }

  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      <MetaFields />
      {blocks.map((el) => {
        const Component = templatesMap[el.type].component
        return <Component key={el.id} id={el.id} />
      })}
      <Stack direction="row" spacing={3}>
        <Button variant="contained" onClick={onSubmit}>Создать</Button>
        <AddTemplate onAdd={onAdd} />
      </Stack>
    </Stack>
  )
}