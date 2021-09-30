import React from "react";
import CardHolder from "./CardHolder/CardHolder";
import GlobalModalProvider from "./GlobalModalProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalModalProvider renderProps={(setModalContent) => {
                return (
                    <CardHolder setModalContent={setModalContent} />
                )
            }}>
            </GlobalModalProvider>
        </React.Fragment>
    )
}

export default App;