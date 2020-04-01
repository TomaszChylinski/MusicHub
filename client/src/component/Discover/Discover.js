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
        <div class="col-md-4 port-imgs">
          <img src={image} />
        
        
          <div
            className="artistName"
          >
            {`${firstName}  ${lastName}`}
          </div>



          <div className="artistName">
            <button className="">Follow</button>
          </div>



        </div>
      );
    });
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="newsTitle col-sm-12">
            Stay up to date with MusicHub
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <QuickLinks />
          </div>

          {this.renderNewFriends()}
        </div>
      </div>
    );
  }
}

export default discover;
