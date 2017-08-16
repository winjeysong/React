/*
 * show article list
 */

//load dependencies
import React, { PropTypes } from "react"
import ListItem from "../ListItem/ListItem";

//prop validation
const propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

//stateless function
function List({ items, onSelect }) {
    //traverse component ListItem
    const itemsAll = items.map(
        item => (
            <ListItem
                item={item}
                key={item.id}
                onClick={() => onSelect(item.id)}
            />
        )
    );

    return (
        <div className="">
            {itemsAll}
        </div>
    );
}

//add prop validation
List.propTypes = propTypes;

//export this component
export default List;