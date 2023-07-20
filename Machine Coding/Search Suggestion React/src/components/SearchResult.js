import React from "react";
import "./SearchResult.css";

const SearchResult = ({ res }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${res.name}`)}
    >
      {res.name}
    </div>
  );
};

export default SearchResult;
