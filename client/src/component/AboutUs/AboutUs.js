import React from "react";
import "./AboutUs.css";

import QuickLinks from "../QuickLinks";

class aboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
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


        </div>
      </div>
    );
  }
}

export default aboutUs;
