import React, { useCallback } from "react";
import { TASK_STATUS } from "../constants/taskStatus";
import EditCardModal from "./modalContent/EditCardModal";

const Card = (props) => {
    const isTaskToDo = props.state === TASK_STATUS.toDo;
    const isTaskInProgress = props.state === TASK_STATUS.inProgress;
    const isTaskDone = props.state === TASK_STATUS.done;

    const handleEditModal = () => {
        props.setModalContent(
            <EditCardModal
                taskName={props.taskName}
                taskDescription={props.taskDescription}
                editTask={props.editTask}
                taskId={props.taskId}
            />);
    };

    return (
        <div className={"card-item marker-white"}>
            {!isTaskDone && (
                <button className={"btn-card btn-card-edit"} onClick={handleEditModal} >
                    <i className={"fas fa-pencil-alt"}></i>
                </button>
            )}
            <p className={"card-title-task"}>Task:</p>
            <div className={"card-taskname-wrapper"}>
                <p className={"card-taskname"}>{`${props.taskName}`}</p>
                <p className={"card-taskname-status"}>{`is ${props.isDone ? 'done' : 'not done'}`}</p>
            </div>

            <p className={"card-title-discription"}>Discription:</p>
            <p className={"card-discription"}>{`${props.taskDescription}`}</p>
            <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
            <div className={"avatar"}>
                <p className={"card-title-username"}>User name:</p>
                <p className={"card-username"}>{`${props.userName}`}</p>
                <div className={"avatar-img"}>
                </div>
            </div>
            <div className={"card-btn-wrapper"}>
                <button className={"card-btn"} onClick={props.moveUp(props.index)}>MoveUp</button>
                <button className={"card-btn"} onClick={props.moveDown(props.index)}>MoveDown</button>
                {!isTaskToDo && !isTaskDone &&
                    <button className={"card-btn"} onClick={props.taskToDo(props.index)}>To Do</button>}
                {!isTaskInProgress &&
                    <button className={"card-btn"} onClick={props.taskInProgress(props.index)}>In Progress</button>}
                {!isTaskDone && !isTaskToDo &&
                    <button button className={"card-btn"} onClick={props.taskDone(props.index)}>Done</button>}
                <button className={"card-btn"} onClick={props.deleteTask(props.index)}>Delete</button>
            </div>
        </div >
    );
};

export default React.memo(Card);