import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"
import EditIcon from "@mui/icons-material/Edit"

import { useCallback, useEffect } from "react"
import { usePages } from "../../shared/store/usePages"
import { CategorySet, type CategoryType } from "../../types/content.types"
import { BASE_URL } from "../../const/env"
import { textPlump } from "../../shared/utils/textPlump"
import { useNavigate } from "react-router-dom"

export const PagesList = () => {
  const { pages, getPages, deletePage } = usePages()
  const navigate = useNavigate()

  useEffect(() => {
    getPages()
  }, [getPages])

  const onDeletePage = useCallback((id: string) => {
    deletePage(id)
  }, [deletePage])

  const onViewPage = useCallback((slug: string) => {
    window.open(`${BASE_URL}/content/${slug}`, "_blank");
  }, [])

  const onEditPage = useCallback((slug: string) => {
    navigate(`/edit/${slug}`)
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Заголовок</TableCell>
            <TableCell>Описание</TableCell>
            <TableCell>Slug</TableCell>
            <TableCell>Категория</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pages?.map(page => (
            <TableRow key={page.id}>
              <TableCell>{textPlump(page.meta.title)}</TableCell>
              <TableCell>{textPlump(page.meta.description)}</TableCell>
              <TableCell>{page.slug}</TableCell>
              <TableCell>{CategorySet[page.category as CategoryType]}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onViewPage(page.slug)}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() => onEditPage(page.slug)}>
                  <EditIcon/>
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => onDeletePage(page.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
