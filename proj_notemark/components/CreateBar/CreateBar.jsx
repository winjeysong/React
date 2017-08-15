/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";

//prop validation
const propTypes = {
    item: PropTypes.object.isRequired,

}

//stateless function
function CreateBar() {
    return (
        <div className="">
            <span className="">+新建文章</span>
        </div>
    );
}

//add prop validation
ListItem.propTypes = propTypes;

//export this component
export default ListItem;