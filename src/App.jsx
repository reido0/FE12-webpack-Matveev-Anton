import React from "react";
import GlobalModalProvider from "./GlobalModalProvider";
import MainScene from "./Scenes/MainScene";

const App = (props) => (
    <React.Fragment>
        <GlobalModalProvider>
            <MainScene />
        </GlobalModalProvider>
    </React.Fragment>
);

export default React.memo(App);