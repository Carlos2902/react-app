// const estilos = {
//   backgroundColor: 'red'
// }
function TodoCount({total, completed}){
 
  return(
     <h1 style={{
      fontSize: '24px',
      textAlign: 'center',
      margin: 0,
      padding: '48px',

     }}>
      You've acomplished {completed} of {total} ToDOs
     </h1>
    );
  }

export {TodoCount};