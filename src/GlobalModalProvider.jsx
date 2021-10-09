import React, { memo, useState } from "react";
import ModalWindow from "./Components/ModalWindow";

export const ModalContext = React.createContext(false);

const GlobalModalProvider = (props) => {
    const [modalContent, setModalContent] = useState(false);

    return (
        <React.Fragment>
            <ModalContext.Provider value={setModalContent}>
                {modalContent &&
                    <ModalWindow>
                        {modalContent}
                    </ModalWindow>}
                {props.children}
            </ModalContext.Provider>
        </React.Fragment>
    )
}

export default memo(GlobalModalProvider);