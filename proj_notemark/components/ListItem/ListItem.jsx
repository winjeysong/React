/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";
import "../../styles/ListItem.scss";

//prop validation
const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

//stateless function
function ListItem({ item, onClick }) {
    let myTime = "无日期信息";
    if (item.time) {
        myTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[0];  //获取日期，类似于1970-01-01这样的格式
    }
    let titleString = item.title.toString();
    let myTitle = titleString.length <= 8 ? item.title : `${titleString.slice(0, 7)}...`;
    return (
        <div className="list-item">
            <span className="list-item-time">
                {myTime}
            </span>
            <span className="list-item-title">
                {myTitle}
            </span>
            <button
                className="list-item-btn btn btn-default"
                onClick={onClick}
            >
                查看
            </button>
        </div>
    );
}

//add prop validation
ListItem.propTypes = propTypes;

//export this component
export default ListItem;
