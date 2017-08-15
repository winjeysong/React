import React from "react";
import { render } from "react-dom";
import Profile from "./profile";

const props = {
    name: "song",
    age: 24
};
const app = document.createElement("div");

document.body.appendChild(app);
render(<Profile {...props} />, app);
