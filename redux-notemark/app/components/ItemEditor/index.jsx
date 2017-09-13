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
};

//stateless function
class ItemEditor extends React.Component {
    render() {
        let titleInput = null;
        let contentInput = null;
        const { onSave, onCancel } = this.props;
        const item = this.props.item || {
            title: "",
            content: ""
        };
        const editText = item.id ? "保存" : "创建";
        const save = () => {
            onSave({
                item,
                title: titleInput.value,
                content: contentInput.value
            });
        };
        return (
            <div className="item-editor">
                <div className="control-btn">
                    <button onClick={save} className="btn create-save-btn">{editText}</button>
                    <button onClick={onCancel} className="btn cancel-btn">取消</button>
                </div>
                <div className="edit-box">
                    <input
                        ref={
                            (input) => { titleInput = input; }
                        }
                        defaultValue={item.title}
                        type="text"
                        className=""
                        placeholder="请输入标题"
                    />
                    <textarea
                        ref={
                            (textarea) => { contentInput = textarea; }
                        }
                        defaultValue={item.content}
                        name=""
                        id=""
                        placeholder="开始写作吧"
                    />
                </div>
            </div>
        );
    }
}

//add prop validation
ItemEditor.propTypes = propTypes;

//default props
ItemEditor.defaultProps = {
    item: []
};

//export this component
export default ItemEditor;
