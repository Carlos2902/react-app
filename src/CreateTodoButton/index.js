import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateButton.css";

function CreateTodoButton({setOpenModal}) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        ()=>{
          setOpenModal(state => !state)
          // Arrow fction: receives state & returns the negation of that state
        }
      }
    >
      +
    </button>
  );
}




export { CreateTodoButton };
