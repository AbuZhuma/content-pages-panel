import type { ContentType } from "../../types/content.types"
import { parseStyles } from "./parseStyles"

type ParsedStyles = Record<string, string> 

export function buildSaveBlockFunc<T extends ContentType>({
  block,
  id,
  updateBlock,
  buildData,
  styles = "",
}: {
  block: T
  id: string
  updateBlock: (id: string, data: T) => void
  buildData: (args: { trimmed: string; parsed: ParsedStyles }) => T["data"]
  styles?: string
}) {
  const trimmed = styles.trim()
  const parsed: ParsedStyles = parseStyles(styles)

  const updates: T = {
    ...block,
    data: buildData({ trimmed, parsed }),
  }

  updateBlock(id, updates)
}
