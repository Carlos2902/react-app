import React from "react";
import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

// props:
function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}) {
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
                // todos={todos}
                // setTodos={saveTodos}
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

export {AppUI};