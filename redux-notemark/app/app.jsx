import React from "react";
import { render } from "react-dom";
import { bindActionCreators, createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import NoteMark from "./components/NoteMark";

import combinedReducer from "./reducers";
import * as actionCreators from "./actions";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//create store with middleware
const store = applyMiddleware(
    thunkMiddleware
)(createStore)(combinedReducer);

//root component
const App = connect(
    state => ({ state }),
    dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch)
    })
)(NoteMark);

// create DOM container
const container = document.body.appendChild(
    document.createElement("div")
);

// render root conponent with store to DOM container
render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);

/*render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
*/
