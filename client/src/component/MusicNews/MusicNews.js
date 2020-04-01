import React from "react";
import "./MusicNews.css";
import * as $ from "axios";

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
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <p className="card-text">{this.state.title}</p>
              <a href={link} className="btn btn-primary">
                {title}
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
          <div className="col-sm-12">Stay up to date with MusicHub</div>
        </div>
        <hr className="hr-line"></hr>

        <div className="row">{this.renderTableData()}</div>
      </div>
    );
  }
}

export default MusicNews;
