import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

// svg images converted into labels: <CheckSVG></CheckSVG> & <DeleteSVG></DeleteSVG>
// conditional: depends on the type, it will drop either the check or delete icon
const iconTypes = {
    "check":(color)=> <CheckSVG className="Icon-svg"
    fill={color}/>,
    "delete": (color)=><DeleteSVG className="Icon-svg"
    fill={color}/>
};
            // props: type from <CheckSVG/>,<CheckSVG/>,
                // Either onComplete nor onDelete events will be translate
                // it into 'onClick' events
function TodoIcon({type, color, onClick}){
    return(
    <span 
    className={`Icon-container Icon-container-${type}`
    }
    onClick={onClick}>
    {iconTypes[type](color)}
    </span>
    );
}


export{TodoIcon};