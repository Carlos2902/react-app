import React from 'react';
import "./styles/TodoSearch.css";

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
        console.log('Escribiste algo en el input')
        console.log('Los usuarios buscan: ' + searchValue);
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
