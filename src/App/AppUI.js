import React from "react";
import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {TodosLoading} from "../TodosLoading";
import {TodosError} from "../TodosError";
import {EmptyTodos} from "../EmptyTodos"
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";


// props:
function AppUI () {
    return (
        <React.Fragment>
          {/* First message */}
          <TodoCount>
            
          </TodoCount>
          {/* Search field */}
          <TodoSearch/>

          {/* TodoList will have now access to TodoContext props in order to execute its data */}
          <TodoContext.Consumer>
           {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
           })=>(
            <TodoList>
            {loading && 
            <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            </>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) &&<EmptyTodos/>}
              


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
           )}
          </TodoContext.Consumer>
    
          {/* Button to create ToDo's */}
          <CreateTodoButton />
        </React.Fragment>
      );
}

export {AppUI};