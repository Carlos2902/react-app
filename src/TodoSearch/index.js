import React from 'react';
import "./TodoSearch.css";

// Communication, receiving through props search and setSearch status:
function TodoSearch({searchValue,
  setSearchValue,
}) {

  return (
    <input
      placeholder="Cut onions"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
