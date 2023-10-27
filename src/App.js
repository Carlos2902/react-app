import logo from './platzi.webp';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

// component
function App() {
  return (
    <div className="App">

    {/* First message */}
      <TodoCount/>
    {/* Search field */}
     <TodoSearch/>

    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    {/* Button to create ToDo's */}
    <CreateTodoButton/>

    </div>
  );
}






export default App;
