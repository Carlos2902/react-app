import React from "react";
import  ReactDOM  from "react-dom";
import  "./Modal.css";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
                            // public/index.html
    );
}
// ReactPortal:
// 1. We have to indicate which content is the one we have to present
// 2. We indicate where to teletransport that content
export {Modal};