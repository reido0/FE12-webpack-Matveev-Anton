import React from "react";
import CardHolder from "./Components/CardHolder/CardHolder";
import GlobalModalProvider from "./GlobalModalProvider";

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalModalProvider>
                <CardHolder />
            </GlobalModalProvider>
        </React.Fragment>
    )
}

export default App;