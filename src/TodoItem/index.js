import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import "./TodoItem.css";

function TodoItem(props) {
  // handleDeleteClick function added
  // const handleDeleteClick = () => {
    // filter the elements that it is not necessary and update the state
  //   const updatedTodos = props.todos.filter((todo) => todo.text !== props.text);
  //   props.setTodos(updatedTodos);
  // };

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      


      <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
      onDelete={props.onDelete}
      />

 
     
    </li>
  );
}

export { TodoItem };
