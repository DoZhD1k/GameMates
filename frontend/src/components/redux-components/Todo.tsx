import React, { Component } from "react";
import { connect } from "react-redux";
import FilterButtons from "./FilterButtons.tsx";
import { addTodo, updateSearchTerm } from "../redux/actions.ts";
import { TodoProps, TodoComponentState } from "../redux/types.ts";
import { AppDispatch } from "../redux/store.ts";

class Todo extends Component<TodoProps, TodoComponentState> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      newTodoText: "",
      searchTerm: "",
    };
  }

  handleAddTodo = (text: string) => {
    this.props.addTodo(text);
  };

  handleAddTodoClick = () => {
    const { newTodoText } = this.state;
    if (newTodoText.trim() !== "") {
      this.handleAddTodo(newTodoText.trim());
      this.setState({ newTodoText: "" });
    }
  };

  handleSearchChange = (value: string) => {
    this.setState({ searchTerm: value });
    this.props.updateSearchTerm(value);
  };

  render() {
    const { newTodoText, searchTerm } = this.state;

    return (
      <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-black-100 rounded">
        <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-white uppercase">
          Personal TODO
        </h2>
        <div className="flex items-center mb-4">
          <input
            id="addTodoInput"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => this.setState({ newTodoText: e.target.value })}
          />
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={this.handleAddTodoClick}
          >
            Add New One
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <FilterButtons />
          <div className="flex items-center mb-4">
            <input
              className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => this.handleSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  updateSearchTerm: (term: string) => dispatch(updateSearchTerm(term)),
});

export default connect(null, mapDispatchToProps)(Todo);
