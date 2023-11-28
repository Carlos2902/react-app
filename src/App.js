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
  {text: "Go gym", completed: false},
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

  // function: awaits to receive a parameter with the text 
  // in order to know which todo we're checking as completed
  const completeTodo = (text)=>{
    // new generated array list with Todo's updated (property completed:true)
    const newTodos = [...todos];
    // WHICH of all of text array is the one that we want to modify (in order to chek it as completed)
    // in the case above, whe need a unique identifier (key)
    const todoIndex=newTodos.findIndex(
      // logic behhind the default method findIndex:
      // if the text we're receiving is the same as the text we want to complete it...will return 
      // an updated array [todoIndex] its index.
      (todo)=>todo.text == text
    );
    // logic: for the new array list, on the index, apply property 'completed=true'
    newTodos[todoIndex].completed = true;
    // update the state 'setTodos'
    setTodos(newTodos);
  };


  const deleteTodo = (text)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    );
        // arrayManipulation method -> .splice
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
            todos={todos}
            setTodos={setTodos}
            // EVENTS in react does not await for the executed function
            // they need a function where react can put () only when 
            // the event of the interaction occurs. (in this case
            // when the user clicks on the 'check' icon to complete a task)
              // That's why we wrap the 'completedTodo' in other function (arrowFunction)
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* Button to create ToDo's */}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
