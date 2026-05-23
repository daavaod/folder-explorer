import Header from "./Header";
import MainContent from "./MainContent";
import FolderWrap from "../../features/FolderExplorer/components/FolderWrap";

export default function CenterContent() {
  return (
    <div
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <Header />
      <MainContent>
        <h2 className="text-2xl font-bold mb-4">Welcome to Folder Explorer</h2>
        <p className="text-gray-700">
          This is a simple application to explore your folders and files. Use
          the navigation above to get started.
        </p>
        <FolderWrap />
      </MainContent>
    </div>
  );
}
