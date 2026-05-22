export type FileNode = {
  id: string;
  name: string;
  type: "file";
};

export type FolderNode = {
  id: string;
  name: string;
  type: "folder";
  children: FileTreeNode[];
};

export type FileTreeNode = FileNode | FolderNode;
