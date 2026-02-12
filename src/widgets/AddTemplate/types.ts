import type { ContentDataType } from "../../types/content.types";

export type AddTemplateProps = {
  onAdd: (type: ContentDataType) => void;
};