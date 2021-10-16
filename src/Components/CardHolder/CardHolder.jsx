import React, { useState, useEffect, useCallback, useContext } from "react";
import Card from "../card";
import { ModalContext } from "../../GlobalModalProvider";
import EditCardModal from "../modalContent/EditCardModal";
import AddCardModal from "../modalContent/AddCardModal";
import { TASK_STATUS } from "../../constants/taskStatus";



//Functional Component

const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const setModalContext = useContext(ModalContext);

    const addTask = (newTaskName, newTaskDescription, state) => {
        if (newTaskName !== '') {
            let newTasklist = [...taskList];
            newTasklist.push(
                {
                    taskName: newTaskName,
                    isDone: false,
                    taskDescription: newTaskDescription,
                    userName: newUserName,
                    state: state
                }
            )
            setTaskList(newTasklist);
            setNewUserName('');
            setNewTaskDescription('');
        }
    };

    return (
        <React.Fragment>
            <div>
                <div className={"container board-todo"}>
                    <div className={"board-title"}>
                        <h2>{props.title}</h2>
                        <button className={"btn-board"}>
                            <i className={"fas fa-ellipsis-h"}></i>
                        </button>
                    </div>
                    {props.children}
                    {props.taskStatus !== TASK_STATUS.done &&
                        <button className={"button-add-card"}
                            onClick={() => {
                                setModalContext(
                                    <AddCardModal addTask={addTask} taskStatus={props.taskStatus} />
                                )
                            }}
                        >+ Add new Card</button>
                    }
                </div>
            </div>
        </React.Fragment>
    )
};

export default CardHolder;