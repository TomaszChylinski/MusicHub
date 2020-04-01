import React from "react";
import "./Discover.css";
import * as $ from "axios";

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
      const { firstName, lastName, image,friendStatus } = item; //destructuring
      return (
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <img
              className="card-img-top"
              src={image}
              alt="Card image cap"
            />
            <p className="card-text">{firstName} {lastName}</p>
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
          <div className="col-sm-12">Find Friends</div>
        </div>
        <hr className="hr-line"></hr>

        <div className="row">

            {this.renderNewFriends()}
          </div>
        </div>

    );
  }
}

export default discover;
