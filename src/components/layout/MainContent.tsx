export default function MainContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <main className="p-4">{children}</main>;
}
