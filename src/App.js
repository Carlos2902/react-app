// eslint-disable-next-line
import React from "react";
import { TodoCount } from "./TodoCount";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Terminar curso react.js", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Example", completed: false },
  { text: "exams", completed: true },
];



// component
function App() {
  // New Todo's status
  const [todos, setTodos] = React.useState(defaultTodos);

  // Search Todo's state (communication beetwen father ->appjs to TodoSearch)
  const [searchValue, setSearchValue] = React.useState('');

  // Completed Todo's & Total todo's
  const completedTodos = todos.filter(
    todo => 
    !!todo.completed).length;

  const totalTodos = todos.length;

  // Creation of a new state
  const searchedTodos = todos.filter(
     (todo) => {
            //includes (method)
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
     }
  );

  

  return (
    <React.Fragment>
      {/* First message */}
      <TodoCount completed={completedTodos} total={totalTodos} />
      {/* Search field */}
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* render  ALL THE todo's from the derived state 'SEARCHED TODO'S' */}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      {/* Button to create ToDo's */}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
