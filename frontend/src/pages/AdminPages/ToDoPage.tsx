// Importing React and FC for functional component type
import React, { FC } from "react";
import Todo from "../../components/redux-components/Todo.tsx";
import "./CSS/index.css";

// Typing the component as a functional component
const ToDoPage: FC = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default ToDoPage;
