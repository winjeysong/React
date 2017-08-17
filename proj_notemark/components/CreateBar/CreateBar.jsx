/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";

//prop validation
const propTypes = {
    onClick: PropTypes.func.isRequired
};

//stateless function
function CreateBar({ onClick }) {
    return (
        <a href="#" onClick={onClick} className="">
            +新建文章
        </a>
    );
}

//add prop validation
CreateBar.propTypes = propTypes;

//export this component
export default CreateBar;