import React from "react";
import Card from "../../modules/card";

class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [{ taskName: 'task 0', isDone: false }, { taskName: 'task 1', isDone: false }]
        }
    }

    addTask = () => {
        let newTasklist = [...this.state.taskList];
        newTasklist.push({ taskName: `task ${this.state.taskList}`, isDone: false });
        this.setState({ taskList: newTasklist });
    }

    changeName = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].taskName = 'XXX';
        this.setState({ taskList: newTaskList });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.taskList.map((task, index) => {
                        return (
                            <div>
                                <Card taskName={task.taskName} isDone={task.isDone} />
                                <button onClick={this.changeName(index)}>change name</button>
                            </div>
                        )
                    })}
                </div>
                <button onClick={this.addTask}>add task</button>
            </div>
        )
    }
}

export default CardHolder