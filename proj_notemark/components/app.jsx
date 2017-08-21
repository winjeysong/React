import React from "react";
import { render } from "react-dom";
import NoteMark from "./NoteMark/NoteMark";


const app = document.createElement("div");

document.body.appendChild(app);
render(<NoteMark />, app);
