/*
 * show article
 * markdown available
 */

import React, { PropTypes } from "react";
//load dependencies
import marked from "marked";
import "./style.scss";

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
            <div className="item-show-layer-article not-selected">
                请创建并点击文章列表里的文章进行查看与修改。
            </div>
        );
    }
    //transform markdown to HTML
    const content = marked(item.content);
    return (
        <div className="item-show-layer">
            <div className="control-btn">
                <button
                    onClick={() => onEdit(item.id)}
                    className="edit-btn btn btn-success"
                >
                    编辑
                </button>
                <button
                    onClick={() => onDelete(item.id)}
                    className="delete-btn btn btn-danger"
                >
                    删除
                </button>
            </div>
            <div className="item-show-layer-article">
                <div className="article">
                    <h1>{item.title}</h1>
                    <hr />
                    <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
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
