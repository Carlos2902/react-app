import React from 'react';
import "./styles/TodoSearch.css";

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
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
