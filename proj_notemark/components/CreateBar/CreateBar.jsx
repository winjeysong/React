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
        <button  onClick={onClick} className="">
            +新建文章
        </button>
    );
}

//add prop validation
CreateBar.propTypes = propTypes;

//export this component
export default CreateBar;
