/**
 * @ NoteMark
 */

import React, { PropTypes } from "react";
import CreateBar from "../CreateBar";
import List from "../List";
import ItemShowLayer from "../ItemShowLayer";
import ItemEditor from "../ItemEditor";

import "./style.sass"

const propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

class NoteMark extends React.Component {

    //when component mount 
    componentDidMount() {
        this.props.actions.fetchEntryList();
    }

    render() {
        const { state, actions } = this.props;
        const { isEditing, selectedId} = state.editor;
        const items = state.items;
        const item = items.find(
            ({ id }) => id === selectedId
        );

        const main = isEditing ? (
            <ItemEditor
                item={item}
                onSave={actions.saveEntry}
                onCancel={actions.cancelEdit}
            />
        ):
        (
            <ItemShowLayer
                item={item}
                onEdit={actions.editEntry}
                onDelete={actions.deleteEntry}
            />
        );

        return (
            <section className="notemark">
                <nav className="">
                    <a href="winjeysong.com" className="">NoteMark</a>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <CreateBar onClick={actions.createNewEntry} />
                            <List 
                                items={items}
                                onSelect={actions.selectEntry}
                            />
                        </div>
                        {main}
                    </div>
                </div>
            </section>
        );
    }
}

NoteMark.propTypes = propTypes;

export default NoteMark;

