import React, { PropTypes } from "react";

const propTypes = {  //属性验证
    hobby: PropTypes.array.isRequired
};

class Hobby extends React.Component {
    render() {
        return <li>{this.props.hobby}</li>;
    }
}

Hobby.propTypes = propTypes;
export default Hobby;
