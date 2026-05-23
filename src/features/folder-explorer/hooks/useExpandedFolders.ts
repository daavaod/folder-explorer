import { useState } from "react";

export function useExpandedFolders() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

  const toggleFolder = (path: string) => {
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

  return {
    expandedFolders,
    toggleFolder,
  };
}
