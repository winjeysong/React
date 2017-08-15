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
function ListItem({ item }) {
    return (
        <a
            href="#"
            className=""
        >
            <span className="">
                {item.time}
            </span>
            {item.title}
        </a>
    );
}

//add prop validation
ListItem.propTypes = propTypes;

//export this component
export default ListItem;