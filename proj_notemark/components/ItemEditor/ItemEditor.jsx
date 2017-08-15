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
function ItemEditor() {
    return (
        <div className="">
            <div className="control-btn">
                <button className="">发布</button>
                <button className="">取消</button>
            </div>
            <input type="text" className="" value="请输入标题"/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
    );
}

//add prop validation
ListItem.propTypes = propTypes;

//export this component
export default ListItem;