import React, { useState, useEffect, useCallback, useContext } from "react";
import Card from "../card";
import { ModalContext } from "../../GlobalModalProvider";


//Functional Component

const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const setModalContext = useContext(ModalContext);

    useEffect(() => {
        console.log('useEffect');

        new Promise((resolve, reject) => {
            resolve([
                { taskName: "0", isDone: false },
                { taskName: "1", isDone: false }])
        }).then((data) => {
            setTaskList(data);
        })

    }, []);

    const addTask = () => {
        let newTasklist = [...taskList];
        newTasklist.push({ taskName: newTaskName, isDone: false });
        setTaskList(newTasklist);
    }

    const changeName = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].taskName = 'Changed Name';
        setTaskList(newTaskList);
    }

    const moveUp = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList.sort(function (x, y) {
            return x == newTaskList[index] ? -1 : y == newTaskList[index] ? 1 : 0;
        });
        setTaskList(newTaskList);
    }

    const moveDown = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList.sort(function (x, y) {
            return y == newTaskList[index] ? -1 : x == newTaskList[index] ? 1 : 0;
        });
        setTaskList(newTaskList);
    }

    const deleteTask = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }, [taskList]);

    const taskDone = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        setTaskList(newTaskList);
    }, [taskList]);

    console.log("CardHolder Render");

    return (
        <div>
            <div className={"container board-todo"}>
                <div className={"board-title"}>
                    <textarea>ToDo</textarea>
                    <button className={"btn-board"} id={"btn-board-editing"}>
                        <i className={"fas fa-ellipsis-h"}></i>
                    </button>
                </div>
                {taskList.map((task, index) => {
                    return (
                        <div key={task.taskName}>
                            <div className={"state"} id={"state-todo"}>
                                <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={changeName} moveUp={moveUp} moveDown={moveDown} deleteTask={deleteTask} taskDone={taskDone} setModalContent={setModalContext} />
                            </div>
                        </div>
                    )
                })}
                <textarea className={"add-card-textarea"} onChange={(event) => { setNewTaskName(event.target.value) }} value={newTaskName}></textarea>
                <button className={"button-add-card"} onClick={addTask} id={"openModalBtnTodo"}>+ Add new Card</button>
            </div>
        </div>
    )
};

export default CardHolder;