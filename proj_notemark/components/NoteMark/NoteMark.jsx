import React from "react";
import uuid from "uuid";

import CreateBar from "../CreateBar/CreateBar";
import List from "../List/List";
import ItemEditor from "../ItemEditor/ItemEditor";
import ItemShowLayer from "../ItemShowLayer/ItemShowLayer";


export default class NoteMark extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            selectedId: null,
            editing: false
        };

        this.selectItem = this.selectItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    //将状态切换为当前所选项的状态
    selectItem(id) {
        if (id === this.state.selectedId) {
            return;
        }
        this.setState({
            selectedId: id,
            editing: false
        });
    }

    saveItem(item) {
        let items = this.state.items;

        //for new item
        if (!item.id) {
            items = [...items, {
                item,
                id: uuid.v4,
                time: new Date().getTime()
            }];
        //for exsited item
        } else {
            items = items.map(
                existedItem => (
                    existedItem.id === item.id ? {
                        existedItem,
                        item
                    } : existedItem
                )
            );
        }

        this.setState({
            items,
            selectedId: item.id,
            editing: false
        });
    }

    deleteItem(id) {
        if (!id) {
            return;
        }

        this.setState({
            items: this.state.items.filter(
                item => item.id !== id
            )
        });
    }

    createItem() {
        this.setState({
            selectedId: null,
            editing: true
        });
    }

    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true
        });
    }

    cancelEdit() {
        this.setState({
            editing: false
        });
    }

    render() {
        const { items, selectedId, editing } = this.state;
        const selected = selectedId && items.find(item => item.id === selectedId);
        const main = editing ? (
            <ItemEditor
                item={selected}
                onSave={this.saveItem}
                onCancel={this.cancelEdit}
            />
        ) : (
            <ItemShowLayer
                item={selected}
                onEdit={this.editItem}
                onDelete={this.deleteItem}
            />
        );

        return (
            <section className="notemark">
                <nav className="">
                    <a href="http://winjeysong.com">NoteMark</a>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list-group">
                            <CreateBar onClick={this.createItem} />
                            <List
                                items={this.state.items}
                                onSelect={this.selectItem}
                            />
                        </div>
                        {main}
                    </div>
                </div>
            </section>
        );
    }
}
