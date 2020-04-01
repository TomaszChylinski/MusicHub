import React from "react";
import "./Discover.css";
import * as $ from "axios";
import QuickLinks from "../QuickLinks";

class discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // when mounted this will be populated and component will be rerendered
    $.get("api/users").then(result => {
      this.setState({ users: result.data });
      // console.log("log id", result.data.successful._id)
      console.log("show users ", result.data);
    });
  }

  renderNewFriends() {
    return this.state.users.map((item, index) => {
      const { firstName, lastName, image, friendStatus } = item; //destructuring
      return (
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <p className="card-text">
                {firstName} {lastName}
              </p>
              <a href="#" className="btn btn-primary">
                Friend Request
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="home-col col-sm-2">
            <QuickLinks />
          </div>
          <div className="col-sm-10">Find Friends</div>
        {this.renderNewFriends()}
        </div>
      </div>
    );
  }
}

export default discover;
