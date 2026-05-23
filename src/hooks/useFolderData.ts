import { useEffect, useState } from "react";

import { fetchFolderData } from "../features/folder-explorer/api/foldersApi";
import type { FileTreeNode } from "../types/fileTree";

export function useFolderData() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<FileTreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const result = await fetchFolderData(controller.signal);
        setData(result);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError("Failed to load folder data");
      }
      setLoading(false);
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { loading, data, error };
}
