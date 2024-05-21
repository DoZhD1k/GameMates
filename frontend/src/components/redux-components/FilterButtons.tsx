import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../redux/actions.ts";
import { TodoState } from "../redux/types.ts";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: TodoState) => state.filter);

  const handleFilter = (filter: string) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterButtons;
