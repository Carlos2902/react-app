import React from 'react';
import './TodoCount.css';
import { TodoContext } from '../TodoContext';


function TodoCount(){
  // we not longer receive props in the parameter, now we receive it 
  // IN the global context
  // For instance, we need to send what context is the one we wanna use into the useContext hook
  const {
    completedTodos,
    totalTodos,
  }=React.useContext(TodoContext)
 
  return(
    completedTodos === totalTodos?
    <h1 className='allFinished'>
       Nothing to do, you can <span>relax now.</span> 
    </h1>:
     <h1 className='TodoCount'>
      You've acomplished <span>{completedTodos}</span> of <span>{totalTodos}</span>  TO DO's
     </h1>
    );
  }



export {TodoCount};