type Props = {
  name: string;
  level: number;
  isFolder: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
};

export default function FolderTitle({
  name,
  level,
  isFolder,
  isExpanded,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "block",
        paddingLeft: `${level * 20}px`,
        border: "none",
        background: "transparent",
        cursor: isFolder ? "pointer" : "default",
        textAlign: "left",
        color: isFolder ? "black" : "gray",
      }}
    >
      {isFolder ? (isExpanded ? "📂" : "📁") : "📄"} {name}
    </button>
  );
}
