/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";

//prop validation
const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

//stateless function
function ItemEditor() {
    const { onSave, onCancel } = this.props;
    const item = this.props.item || {
        title: "",
        content: ""
    };
    let editText = item.id ? "保存" : "创建";
    let save = () => {
        onSave({
            ...item,
            title: this.titleInput,
            content: this.contentInput
        });
    };

    return (
        <div className="">
            <div className="control-btn">
                <button onClick={save} className="">{editText}</button>
                <button className="">取消</button>
            </div>
            <div className="edit-box">
                <input
                    ref={
                        (input) => { this.titleInput = input; }
                    }
                    defaultValue={item.title}
                    type="text" className="" placeholder="请输入标题"
                />
                <textarea
                    ref={
                        (textarea) => { this.contentInput = textarea; }
                    }
                    defaultValue={item.content}
                    name="" id="" placeholder="开始写作吧"
                >
                </textarea>
            </div>
        </div>
    );
}

//add prop validation
ItemEditor.propTypes = propTypes;

//export this component
export default ItemEditor;