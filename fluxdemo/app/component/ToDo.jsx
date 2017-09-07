import React from "react";
import uuid from "uuid";
import TODOACTION from "../action/ToDoAction";
import TODOSTORE from "../store/ToDoStore";
import List from "./List";
import CreateBtn from "./CreateBtn";


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TODOSTORE.getAll()
        };
        this.createToDo = this.createToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    //register the onChange event in TODOSTORE while the component mounting
    componentDidMount() {
        TODOSTORE.addChangeListener(this.onChange);
    }
    //delete the event while the component unmounting
    componentWillUnmount() {
        TODOSTORE.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            todos: TODOSTORE.getAll()
        });
    }

    createToDo() {
        TODOACTION.create({ id: uuid.v4(), content: "3rd stuff" });
    }

    deleteToDo(id) {
        TODOACTION.delete(id);
    }

    render() {
        return (
            <div>
                <List todos={this.state.todos} onDelete={this.deleteToDo} />
                <CreateBtn onClick={this.createToDo} />
            </div>
        );
    }
}

export default ToDo;
