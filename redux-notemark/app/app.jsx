import React from "react";
import ReactDOM from "react-dom";
import ToDo from  "./component/ToDo";

const APP = document.createElement("div");
document.body.appendChild(APP);
ReactDOM.render(<ToDo />, APP);
