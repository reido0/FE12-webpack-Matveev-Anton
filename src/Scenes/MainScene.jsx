import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import CardHolder from "../Components/CardHolder/CardHolder";
import { TASK_STATUS } from "../constants/taskStatus";

const MainScene = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    useEffect(() => {
        console.log('useEffect');

        new Promise((resolve, reject) => {
            resolve([
                {
                    taskName: '0',
                    isDone: false,
                    taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
                    userName: 'Xeon',
                    state: TASK_STATUS.toDo
                },
                {
                    taskName: '1',
                    isDone: false,
                    taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
                    userName: 'Xeon',
                    state: TASK_STATUS.inProgress
                },
                {
                    taskName: '2',
                    isDone: true,
                    taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
                    userName: 'Xeon',
                    state: TASK_STATUS.done
                },
            ])
        }).then((data) => {
            setTaskList(data);
        })

    }, []);

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

    const changeName = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].taskName = 'Changed Name';
        setTaskList(newTaskList);
    };

    const moveUp = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList.sort(function (x, y) {
            return x == newTaskList[index] ? -1 : y == newTaskList[index] ? 1 : 0;
        });
        setTaskList(newTaskList);
    };

    const moveDown = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList.sort(function (x, y) {
            return y == newTaskList[index] ? -1 : x == newTaskList[index] ? 1 : 0;
        });
        setTaskList(newTaskList);
    };

    const deleteTask = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }, [taskList]);

    const taskDone = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        newTaskList[index].state = TASK_STATUS.done;
        setTaskList(newTaskList);
    }, [taskList]);

    return (
        <CardHolder title={'To Do'} addTask={addTask} taskStatus={TASK_STATUS.toDo}>
            {taskList.map((task, index) => {
                if (task.state === TASK_STATUS.toDo) {
                    return (
                        <div key={task.taskName}>
                            <div className={"state"}>
                                <Card
                                    taskName={task.taskName}
                                    isDone={task.isDone}
                                    index={index}
                                    changeName={changeName}
                                    moveUp={moveUp}
                                    moveDown={moveDown}
                                    deleteTask={deleteTask}
                                    taskDone={taskDone}
                                    setModalContent={setModalContext}
                                    taskDescription={task.taskDescription}
                                    userName={task.userName}
                                    state={task.state}>
                                </Card>
                            </div>
                        </div>
                    )
                }
            })}
        </CardHolder>
    )
}

export default MainScene;