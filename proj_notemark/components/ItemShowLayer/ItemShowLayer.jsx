/*
 * show article
 * markdown available
 */

//load dependencies
import marked from "marked";

//prop validation
const propTypes = {
    item: PropTypes.object.isRequired,

}

//stateless function
function ItemShowLayer({ item }) {
    //if item hasn't passed, return static note
    if (!item || !item.id) {
        return (
            <div className="">
                <div className="">请点击文章列表里的文章进行查看与修改。</div>
            </div>
        );
    }
    //transform markdown to HTML
    let content = marked(item.content);
    return (
        <div className="">
            <div className="control-btn">
                <button className="">编辑</button>
                <button className="">删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="">
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        </div>
    )
}

//add prop validation
ItemShowLayer.propTypes = propTypes;

//export this component
export default ItemShowLayer;