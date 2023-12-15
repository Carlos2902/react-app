import React from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';


// Communication, receiving through props search and setSearch status:
function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  }=React.useContext(TodoContext)
 

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
