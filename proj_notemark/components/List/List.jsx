/*
 * show article list
 */

//load dependencies
import ListItem from "../ListItem/ListItem";

//prop validation
const propTypes = {
    item: PropTypes.object.isRequired,

}

//stateless function
function List({ items }) {item
    //traverse component ListItem
    items = items.map(
        item => (
            <ListItem
                item={item}
                key={item.id}
            />
        )
    );

    return (
        <div className="">
            {items}
        </div>
    );
}

//add prop validation
List.propTypes = propTypes;

//export this component
export default List;