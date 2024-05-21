// store.js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Используем именованный импорт
import todoReducer from "./reducer.ts";

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
