/*
 * show article item
 */

//load dependencies
import React, { PropTypes } from "react";
import "../../styles/ItemEditor.scss";

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
                    <button
                        onClick={save}
                        className="btn create-save-btn btn-success"
                    >
                        {editText}
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
                            value={item.title}
                            onChange={this.handleChangeTitle}
                            type="text"
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
                            value={item.content}
                            onChange={this.handleChangeContent}
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="addon2"
                            placeholder="开始写作吧"
                            rows="35"
                        />
                    </div>
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
