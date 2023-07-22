import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const searchTextValue = event.target.value;
    setSearchText(searchTextValue);
    onSearchChange(searchTextValue);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

