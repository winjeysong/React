/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";
import "./style.scss";

//prop validation
const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

function ItemEditor({ item, onSave, onCancel }) {
    let titleInput = null;
    let contentInput = null;
    let saveText = item.id ? "保存" : "创建";
    let save = () => {
        onSave({
            ...item,
            title: titleInput.value,
            content: contentInput.value
        });
    };
    return (
        <div className="item-editor">
            <div className="control-btn">
                <button
                    onClick={save}
                    className="btn create-save-btn btn-success"
                >
                    {saveText}
                </button>
                <button
                    onClick={onCancel}
                    className="btn cancel-btn btn-warning"
                >
                    取消
                </button>
            </div>
            <div className="edit-box">
                <div className="input-group title-input">
                    <span className="input-group-addon" id="addon1">
                        标题
                    </span>
                    <input
                        ref={(input) => { titleInput = input; }}
                        type="text"
                        defaultValue={item.title}
                        className="form-control"
                        placeholder="请输入标题"
                        aria-describedby="addon1"
                    />
                </div>
                <div className="input-group">
                    <span className="input-group-addon" id="addon2">
                        正文
                    </span>
                    <textarea
                        ref={(input) => { contentInput = input; }}
                        defaultValue={item.content}
                        className="form-control"
                        aria-describedby="addon2"
                        placeholder="开始写作吧"
                        rows="35"
                    />
                </div>
            </div>
        </div>
    );
}

//add prop validation
ItemEditor.propTypes = propTypes;

//default props
ItemEditor.defaultProps = {
    item: []
};

//export this component
export default ItemEditor;
