import React from "react";
import { useSelector } from "react-redux";
import { TodoState, Todo } from "../redux/types";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <div>No todos available</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} - {todo.completed ? "Completed" : "Incomplete"}
        </li>
      ))}
    </ul>
  );
};

const TodoListContainer: React.FC = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  return <TodoList todos={todos} />;
};

export default TodoListContainer;
