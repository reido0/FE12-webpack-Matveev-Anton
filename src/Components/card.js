'use strict';

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

export default Card;