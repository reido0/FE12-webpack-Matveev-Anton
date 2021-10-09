import React, { memo } from "react";

const ModalWindow = (props) => {

    return (

        <div id="openModalwindow" className={"modal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default memo(ModalWindow);