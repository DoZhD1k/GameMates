// types.ts
export interface TodoProps {
  addTodo: (text: string) => void;
  updateSearchTerm: (term: string) => void;
}

export interface TodoState {
  todos: any;
  newTodoText: string;
  searchTerm: string;
}
