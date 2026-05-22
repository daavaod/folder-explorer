import type { FileTreeNode } from "../types/fileTree";

export const fileTree: FileTreeNode = {
  id: "root",
  name: "Root",
  type: "folder",
  children: [
    {
      id: "src",
      name: "src",
      type: "folder",
      children: [
        {
          id: "components",
          name: "components",
          type: "folder",
          children: [
            {
              id: "button",
              name: "Button.jsx",
              type: "file",
            },
          ],
        },
        {
          id: "app",
          name: "App.jsx",
          type: "file",
        },
      ],
    },
    {
      id: "package",
      name: "package.json",
      type: "file",
    },
  ],
};
