import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

// conditional: depends on the type, it will drop either the check or delete icon
const iconTypes = {
    "check":(color)=> <CheckSVG className="Icon-svg"
    fill={color}/>,
    "delete": (color)=><DeleteSVG className="Icon-svg"
    fill={color}/>
};
            // props: type from <CheckSVG/>,<CheckSVG/>,
function TodoIcon({type, color}){
    return(
    <span 
    className={`Icon-container Icon-container-${type}`
    }>
    {iconTypes[type](color)}
    </span>
    );
}


export{TodoIcon};