import React, { memo } from "react";

const ModalWindow = (props) => {
    return (
        // <div className={"modal"}>
        //     {props.children}
        // </div>
        <div id="openModalwindow" className={"modal"}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <input className="modal-title" id="addModalTitle" placeholder="Название задачи" />

                        <span title="Close" id="close" className="close">×</span>
                    </div>
                    <textarea className="modal-body" id="addModalDescription" type="text" name="Task" placeholder="Описание задачи"
                        cols="4" maxlength="500" required></textarea>
                    {props.children}
                    <div className="modal-btn-wrapper">
                        <button className="modal-btn-delete" id="addModalDelete">Удалить</button>
                        <button className="modal-btn-save" id="addModalSave">Сохранить</button>
                        <button className="modal-btn-cancel" id="btn-cancel">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalWindow);