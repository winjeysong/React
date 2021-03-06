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
        <button  onClick={onClick} className="create-bar btn btn-primary" type="button">
            +新建文章
        </button>
    );
}

//add prop validation
CreateBar.propTypes = propTypes;

//export this component
export default CreateBar;
