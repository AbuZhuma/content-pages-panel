import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"

import { useCallback, useEffect } from "react"
import { usePages } from "../../shared/store/usePages"
import { CategorySet, type CategoryType } from "../../types/content.types"
import { BASE_URL } from "../../const/env"

export const PagesList = () => {
  const { pages, getPages, deletePage } = usePages()

  useEffect(() => {
    getPages()
  }, [getPages])

  const onDeletePage = useCallback((id: string) => {
    deletePage(id)
  }, [deletePage])

  const onViewPage = useCallback((slug: string) => {
    window.open(`${BASE_URL}/content/${slug}`, "_blank");
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
          {pages.map(page => (
            <TableRow key={page.id}>
              <TableCell>{page.meta.title}</TableCell>
              <TableCell>{page.meta.description}</TableCell>
              <TableCell>{page.slug}</TableCell>
              <TableCell>{CategorySet[page.category as CategoryType]}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onViewPage(page.slug)}>
                  <VisibilityIcon />
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
