/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";

//prop validation
const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

//stateless function
function ListItem({ item, onClick }) {
    let time = "无日期信息";
    if (item.time) {
        time = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[0];  //获取日期，类似于1970-01-01这样的格式
    }

    return (
        <a
            href="#"
            className=""
            onClick={onClick}
        >
            <span className="list-item-time">
                {time}
            </span>
            <span className="list-item-title">
                {item.title}
            </span>
        </a>
    );
}

//add prop validation
ListItem.propTypes = propTypes;

//export this component
export default ListItem;
