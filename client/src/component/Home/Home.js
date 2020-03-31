import React from "react";
import "./Home.css";
import QuickLinks from '../QuickLinks';
import * as $ from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newStatus: '',
      status: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() { // when mounted this will be populated and component will be rerendered 
    $.get('/api/status')
      .then((result) => {
        this.setState({ status: result.data })
        // console.log("log id", result.data.successful._id)
      }
      )
  }

  // const {status} = this.state.status

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      newStatus: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    $.post('api/status', { status: this.state.newStatus })
      .then((response) => {
        console.log("results from app.js NEW STATUS", response)
        const newPost = response.data.successful;

        this.setState(previousState => {
          console.log("Show new post 2 ", newPost)
          console.log("show previous state  ", previousState)
          return {
           
            ...previousState,
            status: [...previousState.status, newPost]
          }
          
        });
      })
  }


  // this.setState({
  //   newStatus: '',
  //   status: [...this.state.status, this.state.newStatus]
  // });


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="home-col col-sm-2">
            <QuickLinks />
          </div>

          <div className="home-col col-sm-8">
            <div className="homeForm d-flex p-2">
              <i className="fa fa-user"></i>

              <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                  <label for="userpost" className="sr-only">
                    post
                  </label>
                  <input
                    type="text"
                    className="form-control input-sm"
                    placeholder="Add a post"
                    value={this.state.newStatus} onChange={this.handleChange}
                  />
                </div>
                <button className="btn btn-primary mb-2">
                  <i className="fa fa-plus"></i>
                </button>
              </form>
            </div>
            {console.log("show status in return ", this.state.status)}

            <div className="home-timeline">{this.state.status.map((item) => <p key={item._id}> {item.status}  </p>)}</div>

          </div>
          <div className="home-col col-sm-2">Recommended

          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Home;
