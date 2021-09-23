'use strict';

import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div>
            //     {`Task ${this.props.taskName}, is ${this.props.isDone ? 'done' : 'not done'}`};
            // </div>
            <div className="card-item marker-white">
                <button className="btn-card btn-card-edit">
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <p>{`Task ${this.props.taskName}, is ${this.props.isDone ? 'done' : 'not done'}`}</p>
                <p className="finish-date">dateString</p>
                <div className="avatar">
                    <p className="name">userId</p>
                    <div className="avatar-img">
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;