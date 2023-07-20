import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((res) => {
        return <SearchResult res={res} key={res.id} />;
      })}
    </div>
  );
};

export default SearchResultList;
