import { TodoActionTypes } from "./actionTypes.ts";
import { TodoState } from "./types";

const initialState: TodoState = {
  todos: [], // Инициализация пустого массива
  searchTerm: "",
  filter: "ALL",
  error: null,
};

const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload.text, completed: false },
        ],
      };
    case TodoActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TodoActionTypes.MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };
    case TodoActionTypes.MARK_INCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };
    case TodoActionTypes.FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case TodoActionTypes.MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
    case TodoActionTypes.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.payload,
      };
    case "FETCH_TODOS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
