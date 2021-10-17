import React, { useContext, useState, useCallback } from "react";
import { ModalContext } from "../../GlobalModalProvider";

const AddCardModal = (props) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const setModalContext = useContext(ModalContext);

    const handleCancel = useCallback(() => {
        setModalContext();
    }, [setModalContext]);

    const handleSave = useCallback(() => {
        props.addTask(
            taskName,
            taskDescription,
            props.taskStatus,
        );

        setModalContext();
    }, [
        taskName,
        taskDescription,
        setModalContext,
        props.taskStatus,
    ]);

    return (
        <React.Fragment>
            <div className="modal-header">
                <input
                    className="modal-taskname"
                    value={taskName}
                    onChange={(event) => { setTaskName(event.target.value) }}
                    placeholder="Task Name"
                />
                <span title="Close" className="close" onClick={handleCancel}>×</span>
            </div>
            <textarea
                className="modal-description"
                type="text"
                name="Task"
                value={taskDescription}
                onChange={(event) => { setTaskDescription(event.target.value) }}
                placeholder="Description"
                cols="4"
                maxLength="500"
                required>
            </textarea>
            {props.children}
            <div className="modal-btn-wrapper">
                <button className="modal-btn-save"
                    onClick={handleSave}>
                        Save
                    </button>
                <button className="modal-btn-cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </React.Fragment>
    )
}

export default React.memo(AddCardModal);