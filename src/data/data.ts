import type { FileTreeNode } from "../types/fileTree";

export const fileTree: FileTreeNode = {
  id: "1",
  name: "Root",
  type: "folder",
  children: [
    {
      id: "2",
      name: "src",
      type: "folder",
      children: [
        {
          id: "3",
          name: "components",
          type: "folder",
          children: [
            {
              id: "4",
              name: "Button.jsx",
              type: "file",
            },
          ],
        },
        {
          id: "5",
          name: "components empty",
          type: "folder",
          children: [],
        },
        {
          id: "6",
          name: "App.jsx",
          type: "file",
        },
      ],
    },
    {
      id: "7",
      name: "package.json",
      type: "file",
    },
    {
      id: "8",
      name: "package-lock.json",
      type: "file",
    },
  ],
};

export const multiFileTrees = [fileTree, fileTree, fileTree];
