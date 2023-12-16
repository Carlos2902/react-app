import React from "react";
import {useLocalStorage} from './useLocalStorage'
const TodoContext =  React.createContext();
    
function TodoProvider({children}){
          // New Todo's status: return const from useLocalStorage:
            // parameters: name, empty array -> for todo's
            const {
                item: todos, 
                saveItem: saveTodos,
                loading,
                error,
            } = useLocalStorage('TODOS_V1', []);
            // Search Todo's state (communication beetwen father ->appjs to TodoSearch)
            const [searchValue, setSearchValue] = React.useState('');

            const [openModal, setOpenModal] = React.useState(true);


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
                (todo)=>todo.text === text
                );
                // logic: for the new array list, on the index, apply property 'completed=true'
                newTodos[todoIndex].completed = true;
                // update the state 'setTodos'
                saveTodos(newTodos);
            };
            const deleteTodo = (text)=>{
                const newTodos = [...todos];
                const todoIndex = newTodos.findIndex(
                (todo)=>todo.text === text
                );
                    // arrayManipulation method -> .splice
                newTodos.splice(todoIndex, 1);
                saveTodos(newTodos);
            };


            // all the data above should be storage into the property 'value'
            // this will allow to expose all the data globally in the app's context
        return(
            // in this case, we will expose an object globally
            <TodoContext.Provider value={{

                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
            }}>
                {/* Now, any component that resides inside TodoContext, will have access to the data above */}
                {children}
            </TodoContext.Provider>
        );

    }


export {TodoContext, TodoProvider};