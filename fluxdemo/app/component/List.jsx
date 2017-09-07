import React, { PropTypes } from "react";
// import PropTypes from "prop-types";

const propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

function List({ todos, onDelete }) {
    const list = todos.map(todo => (
        <li key={todo.id}>
            <button onClick={() => { onDelete(todo.id); }}>删除</button>
            {todo.content}
        </li>
    ));

    return (
        <ul className="list">
            <h3>待办事项</h3>
            {list}
        </ul>
    );
}

List.propTypes = propTypes;

export default List;
