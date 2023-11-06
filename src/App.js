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
];

// component
function App() {
  return (
    <React.Fragment>
      {/* First message */}
      <TodoCount completed={17} total={25} />
      {/* Search field */}
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
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
