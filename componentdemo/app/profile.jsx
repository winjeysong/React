import React, { PropTypes } from "react";
import Hobby from "./hobby";

const propTypes = {  //属性验证
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //添加点赞的状态
            liked: 0,
            hobbies: ["mystic movie", "electronic music", "photographing"]
        };
        this.likedCallback = this.likedCallback.bind(this);
    }

    likedCallback() {  //给onClick单击事件添加的回调函数
        let liked = this.state.liked;
        liked += 1;
        this.setState({
            liked
        });
    }

    render() {
        return (
            <div className="profile-component">
                {/*属性访问*/}
                <h1>My name is {this.props.name}.</h1>
                <h2>I&#39;m {this.props.age} years old.</h2>
                <button onClick={this.likedCallback}>Like Me</button>
                <h2>total amount of likes: {this.state.liked}</h2>
                <h2>My hobbies:</h2>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <Hobby index={i} hobby={hobby} />)}
                    {/*遍历hobbies并将值传入到Hobby组件中，注意给每个循环组件添加一个唯一的index值*/}
                </ul>
            </div>
        );
    }
}

Profile.propTypes = propTypes; // 将验证赋值给这个组件的propTypes属性

export default Profile;
