import React from "react";
import "./TodoForm.css";

function TodoForm(){
    return(
        <form>
            <label>Write your new Todo</label>
            <textarea
                placeholder="Buy groceries"
            />

            <div className="TodoForm-button--container">
            <button
            className="TodoForm-button--cancel"
            >
                Cancel
            </button>

            <button
            className="TodoForm-button--add"
            >
                Add
            </button>
            </div>
        </form>
    );
}

export {TodoForm};