import React from "react";
import {TodoIcon} from './index.js'

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon
            type= "check"
            // if completed is true, color will be green.
            color = {completed ? 'green': 'gray'}
            onClick={onComplete}
        />
    );
}

export{CompleteIcon};