// eslint-disable-next-line
import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Terminar curso react.js", completed: false },
//   { text: "Llorar con la llorona", completed: true },
//   { text: "Example", completed: false },
//   { text: "exams", completed: true },
//   {text: "Go gym", completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));



// component
function App() {

  // New Todo's status: return const from useLocalStorage:
                        // parameters: name, empty array -> for todo's
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  // Search Todo's state (communication beetwen father ->appjs to TodoSearch)
  const [searchValue, setSearchValue] = React.useState('');

  // Completed Todo's & Total todo's
  const completedTodos = todos.filter(
    todo => 
    !!todo.completed).length;

  const totalTodos = todos.length;
    console.log('Log 1');
    console.log('Log 3');

    // React.useEffect(()=>{
    //   console.log('Log 2');
    // });

//     React.useEffect(()=>{
//       console.log('Log 2');

// }, []);
React.useEffect(()=>{
  console.log('Log 2');

}, [totalTodos]);


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

 

  return(
    // componenr AppUI + props
    <AppUI
    
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo= {completeTodo}
      deleteTodo={deleteTodo}
  
  
    />
  )
}

export default App;
