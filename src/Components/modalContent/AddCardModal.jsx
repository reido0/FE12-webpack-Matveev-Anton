import React, { memo, useContext, useState } from "react";
import { ModalContext } from "../../GlobalModalProvider";

const AddCardModal = (props) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const setModalContext = useContext(ModalContext);
    // const setModalContent = useContext(ModalContext);

    return (
        <React.Fragment>
            <div className="modal-header">
                <input
                    className="modal-title"
                    value={newTaskName}
                    onChange={(event) => { setNewTaskName(event.target.value) }}
                    placeholder="Task Name"
                />
                <span title="Close" className="close" onClick={() => { setModalContext() }}>×</span>
            </div>
            <textarea
                className="modal-body"
                type="text" name="Task"
                value={newTaskDescription}
                onChange={(event) => { setNewTaskDescription(event.target.value) }}
                placeholder="Description"
                cols="4"
                maxlength="500"
                required>
            </textarea>
            {props.children}
            <div className="modal-btn-wrapper">
                {/* <button className="modal-btn-delete" >Удалить</button> */}
                <button className="modal-btn-save"
                    onClick={() => { props.addTask(newTaskName, newTaskDescription); setModalContext() }}>Сохранить</button>
                <button className="modal-btn-cancel" onClick={() => { setModalContext() }}>Отмена</button>
            </div>
        </React.Fragment>
    )
}

export default memo(AddCardModal);