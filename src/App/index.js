// eslint-disable-next-line
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";


function App() {
  return(
    // component AppUI 
   <TodoProvider>
     <AppUI/>
   </TodoProvider>
  )
}

export default App;
