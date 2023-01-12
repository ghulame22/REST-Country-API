import React from "react";

function InputSearch({ search, setSearch, onSubmit, thisTheme }) {
  return (
    <label>
      <form onSubmit={onSubmit}>
        <input
          className="inputSearch"
          style={{ background: `${thisTheme?.inputBg}`, boxShadow: `${thisTheme?.shadow}` }}
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
