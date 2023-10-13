import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "rajendhar",
        location: "koratla",
      },
    };
    //console.log(this.props.name + "constructor");
  }

  componentDidMount() {
    this.time = setInterval(() => {
      console.log("setinterval called");
    }, 1000);
    // const data = await fetch("https://api.github.com/users/jagadeesh944078");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did upate");
  }

  componentWillUnmount() {
    clearInterval(this.time);
    console.log("component will unamount");
  }

  render() {
    //console.log(this.props.name + "render");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vemulajagadeesh28</h4>
      </div>
    );
  }
}

export default UserClass;
