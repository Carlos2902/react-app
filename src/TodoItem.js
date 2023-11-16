import './styles/TodoItem.css'

function TodoItem(props){
  // handleDeleteClick function added
  const handleDeleteClick = () => {
    // filter the elements that it is not necessary and update the state
    const updatedTodos = props.todos.filter((todo) => todo.text !== props.text);
    props.setTodos(updatedTodos);
  };
  
    return (
      <li className='TodoItem'>
        {/* In order to get the properties of completed, we use the `` */}
        {/* ->{To inser js code + $ } */}
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className='Icon Icon-delete' onClick={handleDeleteClick}>X</span>

  
      </li>
    );
  }


export {TodoItem};