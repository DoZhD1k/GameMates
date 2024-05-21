import { TodoActionTypes } from "./actionTypes.ts";

// Интерфейсы для действий
interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: { text: string };
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: { id: number };
}

interface RemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO;
  payload: { id: number };
}

interface FilterTodosAction {
  type: TodoActionTypes.FILTER_TODOS;
  payload: { filter: string };
}

interface UpdateSearchTermAction {
  type: TodoActionTypes.UPDATE_SEARCH_TERM;
  payload: { searchTerm: string };
}

// Определение типа массива объектов
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Объединение всех действий
export type TodoActions =
  | AddTodoAction
  | ToggleTodoAction
  | RemoveTodoAction
  | FilterTodosAction
  | UpdateSearchTermAction;

// Экшн-криэйторы
export const addTodo = (text: string): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: { id },
});

export const filterTodos = (filter: string): FilterTodosAction => ({
  type: TodoActionTypes.FILTER_TODOS,
  payload: { filter },
});

export const updateSearchTerm = (
  searchTerm: string
): UpdateSearchTermAction => ({
  type: TodoActionTypes.UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
