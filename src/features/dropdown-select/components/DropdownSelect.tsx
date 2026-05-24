import { useId, useRef, useEffect } from "react";

// components
import DropdownSelectInput from "./DropdownSelectInput";
import DropdownSelectList from "./DropdownSelectList";

// hooks
import { useSelectSearch } from "../hooks/useSelectSearch";
import { useClickOutside } from "../../../hooks/useClickOutside";

// event emitter
import { appEmitter } from "../../../utils/appEmitter";

// types
import type { DocumentItem } from "../types/documentTypes";

export type DropdownSelectTypes = {
  documents: DocumentItem[];
  id?: string;
};

export default function DropdownSelect({ documents, id }: DropdownSelectTypes) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const generatedId = useId();
  const baseId = id ?? generatedId;
  const inputId = `${baseId}-input`;
  const listId = `${baseId}-listbox`;
  const {
    selected,
    query,
    filteredData,
    handleSearch,
    handleSelect,
    openDropdown,
    closeDropdown,
    isOpen,
  } = useSelectSearch(documents);

  useClickOutside({
    ref: dropdownRef,
    handler: closeDropdown,
    enabled: isOpen,
  });

  useEffect(() => {
    const unsubscribe = appEmitter.on("dropdown-select", (select) => {
      console.log("value selected", select);
    });

    return unsubscribe;
  }, []);

  const eventNames = appEmitter.eventNames();

  console.log(eventNames);

  return (
    <div ref={dropdownRef} className="dropdown-select">
      <DropdownSelectInput
        id={inputId}
        listId={listId}
        placeholder="Search..."
        value={query}
        isOpen={isOpen}
        onSearch={handleSearch}
        onToggle={openDropdown}
      />
      {isOpen && (
        <DropdownSelectList
          listId={listId}
          data={filteredData}
          selected={selected}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
