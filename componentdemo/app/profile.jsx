import React, { PropTypes } from "react";

const propTypes = {  //属性验证
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-component">
                {/*属性访问*/}
                <h1>My name is {this.props.name}.</h1>
                <h2>I&#39;m {this.props.age} years old.</h2>
            </div>
        );
    }
}

Profile.propTypes = propTypes; // 将验证赋值给这个组件的propTypes属性

export default Profile;
