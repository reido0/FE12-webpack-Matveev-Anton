import React, { useEffect, memo } from "react";
/*
// Class component
import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"card-item marker-white"}>
                <button className={"btn-card btn-card-edit"}>
                    <i className={"fas fa-pencil-alt"}></i>
                </button>
                <p>{`Task ${this.props.taskName}, is ${this.props.isDone ? 'done' : 'not done'}`}</p>
                <p className={"finish-date"}>Date</p>
                <div className={"avatar"}>
                    <p className={"name"}>userId</p>
                    <div className={"avatar-img"}>
                    </div>
                </div>
                <div className={"card-btn-wrapper"}>
                    <button class={"card-btn"} onClick={this.props.changeName(this.props.index)}>ChangeName</button>
                    <button class={"card-btn"} onClick={this.props.moveUp(this.props.index)}>MoveUp</button>
                    <button class={"card-btn"} onClick={this.props.moveDown(this.props.index)}>MoveDown</button>
                    <button class={"card-btn"} onClick={this.props.taskDone(this.props.index)}>Done</button>
                    <button class={"card-btn"}>Delete</button>
                </div>
            </div>
        )
    }
}
*/

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
            <button className={"btn-card btn-card-edit"}>
                <i className={"fas fa-pencil-alt"}></i>
            </button>
            <p>{`Task ${props.taskName}, is ${props.isDone ? 'done' : 'not done'}`}</p>
            <p className={"finish-date"}>Date: {new Date().toDateString()}</p>
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