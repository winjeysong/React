/*
 * show article
 * markdown available
 */

import React, { PropTypes } from "react";
//load dependencies
import marked from "marked";

//prop validation
const propTypes = {
    item: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

//stateless function
function ItemShowLayer({ item, onEdit, onDelete }) {
    //if item hasn't passed, return static note
    if (!item || !item.id) {
        return (
            <div className="item-show-layer">
                <div className="not-selected">请点击文章列表里的文章进行查看与修改。</div>
            </div>
        );
    }
    //transform markdown to HTML
    const content = marked(item.content);
    return (
        <div className="item-show-layer">
            <div className="control-btn">
                <button onClick={() => onEdit(item.id)} className="btn edit-btn">编辑</button>
                <button onClick={() => onDelete(item.id)} className="btn delete-btn">删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}

//add prop validation
ItemShowLayer.propTypes = propTypes;

//default prop
ItemShowLayer.defaultProps = {
    item: []
};

//export this component
export default ItemShowLayer;