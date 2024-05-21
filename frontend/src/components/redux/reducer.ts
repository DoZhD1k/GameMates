import { TodoActionTypes } from "./actionTypes.ts";
import { TodoState, TodoActions } from "./types.ts";

const initialState: TodoState = {
  todos: [],
  searchTerm: "",
  filter: "ALL",
  error: null,
};

const todoReducer = (state = initialState, action: TodoActions): TodoState => {
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
    case TodoActionTypes.FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case TodoActionTypes.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

export default todoReducer;
