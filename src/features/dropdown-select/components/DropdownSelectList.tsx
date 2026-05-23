import type { DocumentItem } from "../types/documentTypes";

export type DropDownListType = {
  listId: string;
  data: DocumentItem[];
  selected?: DocumentItem;
  onSelect: (document: DocumentItem) => void;
};

export default function DropdownSelectList({
  listId,
  data,
  onSelect,
  selected,
}: DropDownListType) {
  return (
    <ul id={listId} role="listbox">
      {data.map((document) => {
        const isSelected = selected && document.id === selected.id;

        return (
          <li
            key={document.id}
            onClick={() => onSelect(document)}
            style={{ color: isSelected ? "green" : "black" }}
            role="option"
            aria-selected={Boolean(isSelected)}
          >
            {document.name}
          </li>
        );
      })}
    </ul>
  );
}
