import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor called");
  }

  componentDidMount() {
    //console.log("parent componentDidAmount");
  }

  render() {
    //console.log("parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is aboutus page</h2>
        <UserClass name={"First"} location={"koratla(class)"} />
      </div>
    );
  }
}

export default About;
