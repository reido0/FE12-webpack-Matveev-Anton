import React, { useEffect, memo } from "react";
import { TASK_STATUS } from "../constants/taskStatus";
import AddCardModal from "./modalContent/AddCardModal";
import EditCardModal from "./modalContent/EditCardModal";

//Functional component

const Card = (props) => {
    useEffect(() => {
        console.log("useEffect", props.taskName);

        return () => {
            console.log("bue bue", props.taskName);
        };
    }, []);

    console.log("Card Render", props.taskName);

    return (
        <div className={"card-item marker-white"}>
            <button className={"btn-card btn-card-edit"} onClick={() => { props.setModalContent(<EditCardModal />) }} >
                <i className={"fas fa-pencil-alt"}></i>
            </button>
            <p className={"card-title-task"}>Task:</p>
            <div className={"card-taskname-wrapper"}>
                <p className={"card-taskname"}>{`Task ${props.taskName}`}</p>
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
                <button className={"card-btn"} onClick={props.changeName(props.index)}>ChangeName</button>
                <button className={"card-btn"} onClick={props.moveUp(props.index)}>MoveUp</button>
                <button className={"card-btn"} onClick={props.moveDown(props.index)}>MoveDown</button>
                {props.state !== TASK_STATUS.done &&
                    <button className={"card-btn"} onClick={props.taskDone(props.index)}>Done</button>}
                <button className={"card-btn"} onClick={props.deleteTask(props.index)}>Delete</button>
            </div>
        </div>
    )
};
export default memo(Card);