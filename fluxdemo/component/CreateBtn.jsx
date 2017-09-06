import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    onClick: PropTypes.func.isRequired
}

function CreateBtn ({ onClick }) {
    return (
        <div className="create-btn">
            <button onClick={() => {onClick();}}>创建</button>
        </div>
    );
}

CreateBtn.propTypes = propTypes;
export default CreateBtn;