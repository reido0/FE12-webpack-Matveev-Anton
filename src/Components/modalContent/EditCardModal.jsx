import React, { useContext, useState, useCallback } from "react";
import { ModalContext } from "../../GlobalModalProvider";

const EditCardModal = (props) => {
    const [newTaskName, setNewTaskName] = useState(props.taskName);
    const [newTaskDescription, setNewTaskDescription] = useState(props.taskDescription);
    const setModalContext = useContext(ModalContext);

    const handleSave = useCallback(() => {
        props.editTask(
            newTaskName,
            newTaskDescription,
        );

        setModalContext();
    }, [
        props.addTask,
        setModalContext,
        newTaskName,
        newTaskDescription,
    ]);

    return (
        <React.Fragment>
            <div className="modal-header">
                <input
                    className="modal-taskname"
                    value={newTaskName}
                    onChange={(event) => { setNewTaskName(event.target.value) }}
                    placeholder="Task Name"
                />
                <span title="Close" className="close" onClick={() => { setModalContext() }}>×</span>
            </div>
            <textarea
                className="modal-description"
                type="text" name="Task"
                value={newTaskDescription}
                onChange={(event) => { setNewTaskDescription(event.target.value) }}
                placeholder="Description"
                cols="4"
                maxLength="500"
                required>
            </textarea>
            {props.children}
            <div className="modal-btn-wrapper">
                <button className="modal-btn-save"
                    onClick={handleSave}>Save</button>
                <button className="modal-btn-cancel" onClick={() => { setModalContext() }}>Cancel</button>
            </div>
        </React.Fragment>
    )
}

export default React.memo(EditCardModal);