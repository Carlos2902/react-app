function TodoItem(props){
    return (
      <li>
        <span>{props.completed}V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }


export {TodoItem};