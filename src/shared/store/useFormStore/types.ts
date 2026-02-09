import type { ContentType } from "../../../types/content.types";

export type TemplateBlock = ContentType & { id: string };

export type FormConstructorState = {
  templates: TemplateBlock[];
  addTemplate: (template: ContentType) => void;
  removeTemplate: (id: string) => void;
  updateTemplate: (id: string, updatedTemplate: Partial<ContentType>) => void;
  clearTemplates: () => void;
};