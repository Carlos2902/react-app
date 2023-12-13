import React from 'react';
import "./TodosLoading.css";

// Communication, receiving through props search and setSearch status:
function TodosLoading(props) {

  return (
    <div className= "LoadingTodo-container">
         <span className="LoadingTodo-completeIcon">
         </span>

         <p className="LoadingTodo-text">
         </p>

         <span className='LoadingTodo-deleteIcon'></span>
    </div>



    
  );
}

export { TodosLoading };
