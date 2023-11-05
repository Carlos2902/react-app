import './styles/TodoItem.css'

function TodoItem(props){
    return (
      <li className='TodoItem'>
        {/* In order to get the properties of completed, we use the `` */}
        {/* ->{To inser js code + $ } */}
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className='Icon Icon-delete'>X</span>
      </li>
    );
  }


export {TodoItem};