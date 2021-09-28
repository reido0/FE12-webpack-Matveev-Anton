import React from "react";
import Card from "../card";

class CardHolder extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                { taskName: '0', isDone: false },
                { taskName: '1', isDone: false }
            ]
        }
    }

    addTask = () => {
        let newTasklist = [...this.state.taskList];
        let userCardText = document.getElementsByClassName('add-card-textarea');
        userCardText.value = '';
        // newTasklist.push({ taskName: `task ${this.state.taskList.length}`, isDone: false });
        newTasklist.push({ taskName: userCardText.value, isDone: false });
        this.setState({ taskList: newTasklist });


    }

    changeName = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].taskName = 'Changed Name';
        this.setState({ taskList: newTaskList });
    }

    moveUp = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.sort(function (x, y) {
            return x == newTaskList[index] ? -1 : y == newTaskList[index] ? 1 : 0;
        });
        this.setState({ taskList: newTaskList });
    }

    moveDown = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.sort(function (x, y) {
            return y == newTaskList[index] ? -1 : x == newTaskList[index] ? 1 : 0;
        });
        this.setState({ taskList: newTaskList });
    }

    deleteTask = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.splice(index, 1);
        this.setState({ taskList: newTaskList });
    }

    taskDone = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].isDone = true;
        this.setState({ taskList: newTaskList });
    }

    render() {
        return (
            <div>
                <div className={"container board-todo"}>
                    <div className={"board-title"}>
                        <textarea>ToDo</textarea>
                        <button className={"btn-board"} id={"btn-board-editing"}>
                            <i className={"fas fa-ellipsis-h"}></i>
                        </button>
                    </div>
                    {this.state.taskList.map((task, index) => {
                        return (
                            <div key={task.taskName}>
                                <div className={"state"} id={"state-todo"}>
                                    <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={this.changeName} moveUp={this.moveUp} moveDown={this.moveDown} deleteTask={this.deleteTask} taskDone={this.taskDone} />
                                </div>
                            </div>
                        )
                    })}
                    <textarea className={"add-card-textarea"}></textarea>
                    <button className={"button-add-card"} onClick={this.addTask} id={"openModalBtnTodo"}>+ Add new Card</button>
                </div>
            </div>
        )
    }
}

export default CardHolder

