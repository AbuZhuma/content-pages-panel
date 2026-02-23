import { Button, Divider, Stack } from '@mui/material'
import { MetaFields } from '../../templates/MetaFields'
import { useFormStore } from '../../shared/store/useFormStore'
import type { ContentDataType } from '../../types/content.types'
import { templatesMap } from '../../shared/configs/templates.config'
import { BLOCK_TEMPLATES } from '../../const/blockTemplates'
import { uuid } from '../../shared/utils/uuid'
import { buildCreatePageFormData } from '../../shared/utils/buildCreatePageFormData'
import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AddTemplate } from '../../widgets/AddTemplate'
import { getPage } from '../../services/getPage'
import { updatePage } from '../../services/updatePage'

export const EditForm = () => {
  const { blocks, images, metaData, addBlock, clearForm, setMetadata } = useFormStore()
  const navigate = useNavigate()
  const {slug} = useParams();
  let isFetched = false

  const fetchPage = useCallback(async (slug: string) => {
    const res = await getPage(slug);
    if (res) {
      res.content.forEach(el => addBlock(el));
      setMetadata({ ...res.meta, slug: res.slug, category: res.category });
    }
  }, [addBlock, setMetadata]);

  useEffect(() => {
    if (!slug || isFetched) return;

    clearForm();
    isFetched = true
    fetchPage(slug);
  }, [slug, fetchPage, clearForm]);

  const onSuccess = useCallback(() => {
    clearForm()
    navigate("/")
  }, [clearForm, navigate])

  const onSubmit = () => {
    if(!slug) return
    const formData = buildCreatePageFormData({
      blocks,
      images,
      metaData,
    })
    
    updatePage({ data: formData, slug: slug, onSuccess })
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
        <Button variant="contained" onClick={onSubmit}>Сохранить</Button>
        <AddTemplate onAdd={onAdd} />
      </Stack>
    </Stack>
  )
}