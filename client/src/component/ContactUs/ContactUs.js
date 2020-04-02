import React from "react";
import "./ContactUs.css";

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
            <h3> Contact Us</h3>
          </div>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-2">
            <QuickLinks />
          </div>

          <div class="col-md-3">
            <span class="et_pb_image_wrap">
              <img className="contactUsImage"
                src="https://awg2020.org/wp-content/uploads/2018/10/message.png"
                alt=""
              />
            </span>

            <p>shaw.b@outlook.com</p>
          </div>

          <div class="col-md-3">
            <span class="et_pb_image_wrap">
              <img className="contactUsImage"
                src="https://awg2020.org/wp-content/uploads/2018/10/mapi.png"
                alt=""
              />
            </span>
            <p>Hartford, Connecticut</p>
          </div>

          <div class="col-md-3">
            <span class="et_pb_image_wrap">
              <img className="contactUsImg"
                src="https://awg2020.org/wp-content/uploads/2018/10/teleph.png"
                alt=""
              />
            </span>
            <p>860.461.2445</p>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutUs;
