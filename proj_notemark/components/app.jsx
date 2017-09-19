import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import NoteMark from "./NoteMark/NoteMark";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const app = document.createElement("div");
document.body.appendChild(app);
render(<NoteMark />, app);
