import { useState } from "react";

// components
import Folder from "./Folder";
// hooks
import { useFolderData } from "../../hooks/useFolderData";
import { useMultiFolderData } from "../../hooks/useMultiFolderData";

export default function FolderWrap() {
  const folderData = useFolderData();
  const multiFolderData = useMultiFolderData();

  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

  const handleOnToggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);

      if (prev.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }

      return newSet;
    });
  };

  return (
    <div className="folder-wrap">
      {multiFolderData.map((folderData, index) => {
        const path = `${index}/${folderData.id}`;

        return (
          <Folder
            key={path}
            data={folderData}
            level={0}
            expandedFolders={expandedFolders}
            onToggleFolder={handleOnToggleFolder}
            path={path}
          />
        );
      })}
    </div>
  );
}
