// const estilos = {
//   backgroundColor: 'red'
// }

import './styles/TodoCount.css';

function TodoCount({total, completed}){
 
  return(
     <h1 className='TodoCount'>
      You've acomplished <span>{completed}</span> of <span>{total}</span>  TO DO's
     </h1>
    );
  }

export {TodoCount};