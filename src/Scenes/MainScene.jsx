import React, { useState, useCallback, useContext } from "react";
import Card from "../Components/Card";
import CardHolder from "../Components/CardHolder/CardHolder";
import {
    COLUMN_VARIANTS,
    DEFAULT_DATA,
    TASK_STATUS,
} from "../constants";
import { ModalContext } from "../GlobalModalProvider";

const MainScene = (props) => {
    console.log('mainscene');
    const [taskList, setTaskList] = useState(DEFAULT_DATA);
    const setModalContext = useContext(ModalContext);

    const addTask = useCallback((newTaskName, newTaskDescription, state) => {
        if (Boolean(newTaskName) && Boolean(newTaskDescription)) {
            const newTasklist = [...taskList];

            newTasklist.push(
                {
                    taskName: newTaskName,
                    isDone: false,
                    taskDescription: newTaskDescription,
                    userName: '',
                    state: state
                }
            )

            setTaskList(newTasklist);
        }
    }, [
        setTaskList,
        taskList,
    ]);

    const editTask = useCallback((taskName, taskDescription) => {
        if (Boolean(taskName) && Boolean(taskDescription)) {
            const newTasklist = [...taskList];
            const currentItem = newTasklist.find((item) => item.taskName === taskName);

            if (currentItem) {
                currentItem.taskDescription = taskDescription;
                setTaskList(newTasklist);
            } else {
                addTask(
                    taskName,
                    taskDescription,
                    TASK_STATUS.toDo,
                );
            }
        }
    }, [
        setTaskList,
        taskList,
        addTask,
    ]);

    const moveUp = useCallback((index) => () => {
        const newTaskList = [...taskList];
        const element = newTaskList[index];

        newTaskList.splice(index, 1);
        newTaskList.splice(index - 1, 0, element);

        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    const moveDown = useCallback((index) => () => {
        const newTaskList = [...taskList];
        const element = newTaskList[index];

        newTaskList.splice(index, 1);
        newTaskList.splice(index += 1, 0, element);

        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    const deleteTask = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    const taskToDo = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = false;
        newTaskList[index].state = TASK_STATUS.toDo;
        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    const taskInProgress = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = false;
        newTaskList[index].state = TASK_STATUS.inProgress;
        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    const taskDone = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        newTaskList[index].state = TASK_STATUS.done;
        setTaskList(newTaskList);
    }, [
        setTaskList,
        taskList,
    ]);

    return (
        <React.Fragment>
            {COLUMN_VARIANTS.map((column) => (
                <CardHolder
                    addTask={addTask}
                    key={column}
                    taskStatus={TASK_STATUS[column]}
                    title={TASK_STATUS[column]}
                >
                    {taskList.map((task, index) => {
                        if (task.state === TASK_STATUS[column]) {
                            return (
                                <div key={task.taskName}>
                                    <div className={"state"}>
                                        <Card
                                            deleteTask={() => deleteTask(index)}
                                            editTask={editTask}
                                            moveDown={() => moveDown(index)}
                                            moveUp={() => moveUp(index)}
                                            setModalContent={setModalContext}
                                            state={task.state}
                                            taskDescription={task.taskDescription}
                                            taskToDo={() => taskToDo(index)}
                                            taskDone={() => taskDone(index)}
                                            taskInProgress={() => taskInProgress(index)}
                                            taskName={task.taskName}
                                            userName={task.userName}
                                            isDone={task.isDone}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </CardHolder>
            ))}
        </React.Fragment>
    )
}

export default React.memo(MainScene);