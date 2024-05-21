import React from "react";
import SearchContainer from "../SearchContainer/SearchContainer.tsx";
import "./HomeContainer.css";

const HomeContainer: React.FC = () => {
  return (
    <div className="container">
      <h1 className="heading">Find teammate for play</h1>
      <SearchContainer />
    </div>
  );
};

export default HomeContainer;
