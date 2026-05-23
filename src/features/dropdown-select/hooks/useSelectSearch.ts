import { useState } from "react";
import type { DocumentItem } from "../types/documentTypes";

export function useSelectSearch(documents: DocumentItem[]) {
  const [query, setQuery] = useState("");
  const [selected, setSelect] = useState<DocumentItem | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredData = !normalizedQuery
    ? documents
    : documents.filter((doc) =>
        doc.name.toLowerCase().includes(normalizedQuery),
      );

  const handleSearch = (search: string) => {
    setQuery(search);
    openDropdown();
    setSelect(undefined);
  };

  const handleSelected = (selected: DocumentItem) => {
    setSelect(selected);
    setQuery(selected.name);
    closeDropdown();
  };

  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    query,
    filteredData,
    selected,
    handleSearch: handleSearch,
    handleSelect: handleSelected,
    openDropdown: openDropdown,
    closeDropdown: closeDropdown,
  };
}
