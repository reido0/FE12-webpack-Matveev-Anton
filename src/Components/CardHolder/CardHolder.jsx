import React, { useContext } from "react";
import { ModalContext } from "../../GlobalModalProvider";
import AddCardModal from "../modalContent/AddCardModal";
import { TASK_STATUS } from "../../constants/taskStatus";

const CardHolder = (props) => {
    console.log('cardholder');
    const setModalContext = useContext(ModalContext);

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
                    {props.taskStatus === TASK_STATUS.toDo && (
                        <button className={"button-add-card"}
                            onClick={() => {
                                setModalContext(
                                    <AddCardModal
                                        addTask={props.addTask}
                                        taskStatus={TASK_STATUS.toDo}
                                    />
                                )
                            }}
                        >+ Add new Card</button>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
};

export default React.memo(CardHolder);