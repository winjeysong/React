import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    items: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

function List ({ items, onDelete }) {
    let list = items.map( item => (
        <li key={item.id}>
            <button onClick={() => {onDelete(item.id);}}>删除</button>
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