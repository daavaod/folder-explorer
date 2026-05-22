// components
import FolderTitle from "./FolderTitle";
import FolderMessage from "./FolderMessage";
// types
import type { FileTreeNode } from "../../types/fileTree";

type FolderProps = {
  data: FileTreeNode;
  onToggleFolder?: (id: string) => void;
  expandedFolders: Set<string>;
  path: string;
  level?: number;
  onSelectedFile?: (file: string) => void;
};

export default function Folder({
  data,
  onToggleFolder,
  expandedFolders,
  path,
  level = 0,
}: FolderProps) {
  const isFolder = data.type === "folder";
  const children = isFolder ? data.children : [];
  const isEmptyFolder = isFolder && children.length === 0;
  const isExpanded = isFolder && expandedFolders.has(path);

  const title = (
    <FolderTitle
      name={data.name}
      level={level}
      isFolder={isFolder}
      isExpanded={isExpanded}
      onClick={isFolder ? () => onToggleFolder?.(path) : undefined}
    />
  );

  if (!isFolder) {
    return title;
  }

  if (!isExpanded) {
    return title;
  }

  if (isEmptyFolder) {
    return (
      <>
        {title}
        <FolderMessage message="This folder is empty" level={level} />
      </>
    );
  }

  return (
    <>
      {title}
      {children.map((item) => {
        const childPath = `${path}/${item.id}`;

        return (
          <Folder
            key={childPath}
            data={item}
            level={level + 1}
            onToggleFolder={onToggleFolder}
            expandedFolders={expandedFolders}
            path={childPath}
          />
        );
      })}
    </>
  );
}
