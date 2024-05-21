import { TodoState } from "./types";

export const getTodos = (state: TodoState) => state.todos;
export const getSearchTerm = (state: TodoState) => state.searchTerm;
