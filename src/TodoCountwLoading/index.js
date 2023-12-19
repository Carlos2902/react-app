import React from 'react';
import './TodoCountwLoading.css';
import { TodoContext } from '../TodoContext';

function TodoCountwLoading(){
    // we not longer receive props in the parameter, now we receive it 
    // IN the global context
    // For instance, we need to send what context is the one we wanna use into the useContext hook
    const {
      completedTodos,
      totalTodos,
    }=React.useContext(TodoContext)
   
    return(
      
      <h1 className='Loading-count--header'>
         <span>Loading</span> Todo's
      </h1>
       
      );
    }
  

    export{TodoCountwLoading};