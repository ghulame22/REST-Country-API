import React from "react";

function InputSearch({ search, setSearch, onSubmit }) {
  return (
    <label>
      <form onSubmit={onSubmit}>
        <input
          className="inputSearch"
          type="text"
          placeholder="Search for a country"
          value={search}
          onChange={setSearch}
        />
      </form>
    </label>
  );
}

export default InputSearch;
