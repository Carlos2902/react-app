import React, { useEffect } from "react";
import { TodoCount } from "../TodoCount";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import {TodosLoading} from "../TodosLoading";
import {TodosError} from "../TodosError";
import {EmptyTodos} from "../EmptyTodos"
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";
import {TodoCountwLoading} from "../TodoCountwLoading"
import {TodoSearchwLoading} from "../TodoSearchwLoading"
import { TodoContext } from "../TodoContext";


// props:
function AppUI () {
  const 
  {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
   }
= React.useContext(TodoContext);

   


    return (
     
        <>

          {loading ? (
          <TodoCountwLoading />
        ) : (
         <TodoCount>
         </TodoCount>
        )}

          {loading ? (
            <TodoSearchwLoading/>
            ):(
           <TodoSearch/>
          )}



          {/* TodoList will have now access to TodoContext props in order to execute its data */}
        
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
          
    
          {/* Button to create ToDo's */}
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
       </>
      );
}

export {AppUI};