import uuid from "uuid";
import EventEmitter from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";

const TODOSTORE = Object.assign({}, EventEmitter.prototype, {
    todos: [{ id: uuid.v4(), content: "first one" }, { id: uuid.v4(), content: "2nd one" }],
    //get all todos
    getAll() {
        return this.todos;
    },

    //add a new todo
    addToDo(toDo) {
        this.todos.push(toDo);
    },

    //delete an existed todo
    deleteToDo(id) {
        this.todos = this.todos.filter(item => item.id !== id);
    },

    emitChange() {
        this.emit("change");
    },

    addChangeListener(callback) {
        this.on("change", callback);
    },

    removeChangeListener(callback) {
        this.removeListener("change", callback);
    }

});

//every action is corresponding to the action passed from dispacher,
//including actionType and its datas
//register 
AppDispatcher.register((action) => {
    switch (action.actionType) {
    case "CREATE_TODO":
        TODOSTORE.addToDo(action.toDo);
        TODOSTORE.emitChange();
        break;
    case "DELETE_TODO":
        TODOSTORE.deleteToDo(action.id);
        TODOSTORE.emitChange();
        break;
    default:
        //nothing
    }
});

export default TODOSTORE;

