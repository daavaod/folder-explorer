// data
import { multiFileTrees } from "../../../data/data.js";

// types
import type { FileTreeNode } from "../../../types/fileTree";

export function fetchFolderData(signal: AbortSignal): Promise<FileTreeNode[]> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => resolve(multiFileTrees), 1000);
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
