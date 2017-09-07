import AppDispatcher from "../dispatcher/AppDispatcher";

const TODOACTION = {
    create(toDo) {
        AppDispatcher.dispatch({
            actionType: "CREATE_TODO",
            toDo
        });
    },
    delete(id) {
        AppDispatcher.dispatch({
            actionType: "DELETE_TODO",
            id
        });
    }
};

export default TODOACTION;
