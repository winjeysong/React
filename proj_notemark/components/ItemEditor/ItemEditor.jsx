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

class ItemEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.item || {
            title: "",
            content: ""
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        const { onSave, onCancel } = this.props;
        const item = {
            title: this.state.title,
            content: this.state.content
        };
        const editText = item.id ? "保存" : "创建";
        const save = () => {
            onSave({
                ...item,
                title: item.title,
                content: item.content
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
                        value={item.title}
                        onChange={this.handleChangeTitle}
                        type="text"
                        className=""
                        placeholder="请输入标题"
                    />
                    <textarea
                        value={item.content}
                        onChange={this.handleChangeContent}
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
