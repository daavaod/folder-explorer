export type FileTreeNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileTreeNode[];
};
