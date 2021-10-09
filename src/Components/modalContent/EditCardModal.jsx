import React, { memo, useContext } from "react";
import { ModalContext } from "../../GlobalModalProvider";

const EditCardModal = (props) => {
    const setModalContext = useContext(ModalContext)

    return (
        <React.Fragment>
            <div className="modal-header">
                <input className="modal-title" placeholder="Название задачи" />

                <span title="Close" className="close" onClick={() => { setModalContext() }}>×</span>
            </div>
            <textarea className="modal-body" type="text" name="Task" placeholder="Описание задачи"
                cols="4" maxlength="500" required></textarea>
            {props.children}
            <div className="modal-btn-wrapper">
                {/* <button className="modal-btn-delete" >Удалить</button> */}
                <button className="modal-btn-save" >Сохранить</button>
                <button className="modal-btn-cancel" onClick={() => { setModalContext() }}>Отмена</button>
            </div>
        </React.Fragment>
    )
}

export default memo(EditCardModal);