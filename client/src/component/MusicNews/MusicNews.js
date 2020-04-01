import React from "react";
import "./MusicNews.css";
import * as $ from "axios";
import QuickLinks from "../QuickLinks";
class MusicNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    // when mounted this will be populated and component will be rerendered

    $.get("http://localhost:3001/news").then(result => {
      this.setState({ news: result.data });
      // console.log("log id", result.data.successful._id)
      console.log("show status ", result);
      console.log("show me the users ", this.state.news);
    });
  }

  renderTableData() {
    return this.state.news.map((news, index) => {
      const { title, link, image } = news; //destructuring
      return (
        // <div className="col-sm-4">
        //   <div className="card">
        //     <div className="card-body">
        //       <img className="card-img-top" src={image} alt="Card image cap" />
        //       <p className="card-text">{this.state.title}</p>
        //       <a href={link} className="btn btn-primary">
        //         {title}
        //       </a>
        //     </div>
        //   </div>
        // </div>

        <div class="col-md-4 port-imgs">
          <a target="_blank" href={`https://www.billboard.com${link}`}>
            <img src={image} />
            <div
              className="articleTitle
            "
            >
              {title}
            </div>
          </a>
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

          {this.renderTableData()}
        </div>
      </div>
    );
  }
}

export default MusicNews;
