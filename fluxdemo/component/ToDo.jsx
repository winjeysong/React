import TODOACTION from "../action/ToDoAction";
import List from "../component/List";
import CreateBtn from "../component/CreateBtn";
import uuid from "uuid";

class ToDo extends React.Component {
    constructor(props) {
        this.createToDo = this.createToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
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
                <List items={this.state.todos} onDelete={this.deleteToDo} />
                <CreateBtn onClick={this.createToDo} />
            </div>
        )
    }
}