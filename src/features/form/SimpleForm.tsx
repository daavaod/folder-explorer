import { useState } from "react";

type TodoFormData = {
  title: string;
  category: string;
  type: string;
};

const initialFormData: TodoFormData = {
  title: "",
  category: "",
  type: "",
};

type Todo = {
  id: string;
  title: string;
  category: string;
  type: string;
  completed: boolean;
};

function TodoForm() {
  const [formData, setFormData] = useState<TodoFormData>(initialFormData);
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateField = (field: keyof TodoFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = formData.title.trim();

    if (!title) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      category: formData.category,
      type: formData.type,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    // Clear the form after adding
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        value={formData.title}
        onChange={(event) => updateField("title", event.target.value)}
        placeholder="Title"
      />

      <select
        value={formData.category}
        onChange={(event) => updateField("category", event.target.value)}
      >
        <option value="">Select category</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>

      <select
        value={formData.type}
        onChange={(event) => updateField("type", event.target.value)}
      >
        <option value="">Select type</option>
        <option value="task">Task</option>
        <option value="reminder">Reminder</option>
      </select>

      <button type="submit">Add todo</button>
    </form>
  );
}
