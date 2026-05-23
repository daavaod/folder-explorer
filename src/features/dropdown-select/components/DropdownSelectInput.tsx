// types
export type InputProps = {
  id: string;
  listId: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  value: string;
  onToggle: () => void;
  isOpen: boolean;
};

export default function DropdownSelectInput({
  id,
  listId,
  placeholder,
  onSearch,
  value,
  onToggle,
  isOpen,
}: InputProps) {
  return (
    <input
      id={id}
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      onClick={onToggle}
      role="combobox"
      aria-expanded={isOpen}
      aria-controls={listId}
      aria-autocomplete="list"
    />
  );
}
