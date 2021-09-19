import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {`Task ${this.props.taskName}, is ${this.props.isDone ? 'done' : 'not done'}`};
            </div>
        )
    }
}

export default Card;