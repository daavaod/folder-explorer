import Header from "./Header";
import MainContent from "./MainContent";
import FolderExplorerWrap from "../../features/folder-explorer/components/FolderExplorerWrap";
import DropdownSelect from "../../features/dropdown-select/components/DropdownSelect";

// data
import { documentsData } from "../../data/documentsData";

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
        <div style={{ marginBottom: "24px" }}>
          <h2>Folder Explorer</h2>
          <FolderExplorerWrap />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <h2>Dropdown Select</h2>
          <DropdownSelect documents={documentsData} />
        </div>
      </MainContent>
    </div>
  );
}
