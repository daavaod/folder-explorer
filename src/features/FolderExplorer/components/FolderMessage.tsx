export default function FolderMessage({
  message,
  level,
}: {
  message: string;
  level: number;
}) {
  return (
    <div
      style={{
        fontSize: "12px",
        color: "gray",
        fontStyle: "italic",
        paddingLeft: `${(level + 1) * 20}px`,
      }}
    >
      {message}
    </div>
  );
}
