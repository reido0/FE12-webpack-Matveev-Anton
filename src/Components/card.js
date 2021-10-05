import React, { useEffect, memo } from "react";

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
            <button className={"btn-card btn-card-edit"} onClick={() => { props.setModalContent('Кнопка "Pencil" TEST') }}>
                <i className={"fas fa-pencil-alt"}></i>
            </button>
            <p>{`Task ${props.taskName}, is ${props.isDone ? 'done' : 'not done'}`}</p>
            <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
            <button className={"card-btn"} onClick={() => { props.setModalContent('Кнопка "Modal" TEST') }} >Modal</button>
            <div className={"avatar"}>
                <p className={"name"}>userId</p>
                <div className={"avatar-img"}>
                </div>
            </div>
            <div className={"card-btn-wrapper"}>
                <button className={"card-btn"} onClick={props.changeName(props.index)}>ChangeName</button>
                <button className={"card-btn"} onClick={props.moveUp(props.index)}>MoveUp</button>
                <button className={"card-btn"} onClick={props.moveDown(props.index)}>MoveDown</button>
                <button className={"card-btn"} onClick={props.taskDone(props.index)}>Done</button>
                <button className={"card-btn"} onClick={props.deleteTask(props.index)}>Delete</button>
            </div>
        </div>
    )
};
export default memo(Card);