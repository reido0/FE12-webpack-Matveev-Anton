'use strict';

import "./styles/index.scss";
import "./styles/card.scss";
import "./styles/board.scss";

import React from "react";
import ReactDOM from "react-dom";

import CardHolder from "./Components/CardHolder/CardHolder";

ReactDOM.render(<CardHolder />, document.getElementById("root"));