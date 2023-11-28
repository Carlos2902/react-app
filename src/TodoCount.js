// const estilos = {
//   backgroundColor: 'red'
// }

import './styles/TodoCount.css';


function TodoCount({total, completed}){
 
  return(
    completed === total?
    <h1 className='allFinished'>
      Congratulations, you've acomplished everything. STAY HARD!!💪🏽
    </h1>:
     <h1 className='TodoCount'>
      You've acomplished <span>{completed}</span> of <span>{total}</span>  TO DO's
     </h1>
    );
  }



export {TodoCount};