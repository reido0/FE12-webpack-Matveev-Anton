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
        newTasklist.push({ taskName: `task ${this.state.taskList.length}`, isDone: false });
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
                <div className="container board-todo">
                    <div className="board-title">
                        <textarea>ToDo</textarea>
                        <button className="btn-board" id="btn-board-editing">
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                    {this.state.taskList.map((task, index) => {
                        return (
                            <div className="state" id="state-todo">
                                <Card taskName={task.taskName} isDone={task.isDone} />
                                <button onClick={this.changeName(index)}>change name</button>
                            </div>
                        )
                    })}
                    <button className="button-add-card" onClick={this.addTask} id="openModalBtnTodo">+ Добавить карточку</button>
                </div>
            </div>
        )
    }
}

export default CardHolder

