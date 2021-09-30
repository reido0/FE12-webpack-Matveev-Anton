import React, { useEffect, memo, useRef, useState } from "react";
import ModalWindow from "./Components/ModalWindow";
// import CardHolder from "./Components/CardHolder/CardHolder";

const GlobalModalProvider = (props) => {
    const [modalContent, setModalContent] = useState(false);

    return (
        <React.Fragment>
            {modalContent &&
                <ModalWindow>
                    {modalContent}
                </ModalWindow>}
            {props.renderProps(setModalContent)}
        </React.Fragment>
    )
}

export default memo(GlobalModalProvider);