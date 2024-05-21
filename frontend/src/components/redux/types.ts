// types.ts
import { TodoActions } from "./actions.ts";

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoProps {
  addTodo: (text: string) => void;
  updateSearchTerm: (term: string) => void;
}

export interface TodoState {
  todos: TodoType[];
  filter: string;
  error: string | null;
  searchTerm: string;
}

export interface TodoComponentState {
  newTodoText: string;
  searchTerm: string;
}

export type TodoActionTypes = TodoActions;
export { TodoActions };
