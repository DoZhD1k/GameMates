import React from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./HomeContainer.css";

const HomeContainer = () => {
  return (
    <div className="container">
      <h1 className="heading">Find teammate for play</h1>
      <SearchContainer />
    </div>
  );
};

export default HomeContainer;
