import { useEffect } from "react";
// components
import TreeNode from "./TreeNode";
// hooks
import { useExpandedFolders } from "../hooks/useExpandedFolders";
import { useFolderData } from "../../../hooks/useFolderData";
// event emitter
import { appEmitter } from "../../../utils/appEmitter";

export default function FolderExplorerWrap() {
  const { data: folderData, loading, error } = useFolderData();
  const { expandedFolders, toggleFolder } = useExpandedFolders();

  const handleSelectedFile = (file: string) => {
    console.log("Selected file:", file);
  };

  useEffect(() => {
    const unsubscribe = appEmitter.on("dropdown-select", (select) => {
      console.log("from file explorer", select);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="folder-wrap">
      {folderData &&
        folderData.map((folderData, index) => {
          const path = `${index}/${folderData.id}`;

          return (
            <TreeNode
              key={path}
              data={folderData}
              level={0}
              expandedFolders={expandedFolders}
              onToggleFolder={toggleFolder}
              onSelectedFile={handleSelectedFile} // TODO: Handle file selection
              path={path}
            />
          );
        })}
    </div>
  );
}
