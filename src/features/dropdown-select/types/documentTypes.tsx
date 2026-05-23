export type DocumentItem = {
  id: string;
  name: string;
  type: DocumentTypes;
  owner: string;
  updatedAt: string;
};

export type DocumentTypes = "pdf" | "docx" | "xlsx";
