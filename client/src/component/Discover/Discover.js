import React from "react";
import "./Discover.css";
import * as $ from 'axios';

class discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };


  }

  componentDidMount() { // when mounted this will be populated and component will be rerendered 
    $.get('http://localhost:3001/users')
      .then((result) => {
        this.setState({ users: result })
        // console.log("log id", result.data.successful._id)
        console.log("show status ", result)
      }
      )
  }

  // handleClick() {
  //   console.log('this is:', this);
  //   $(this).attr("disabled", true);
  // }



  render() {
    return (
      <div className="container">



<div className="row">
  <div className="col-sm-12">
      Find Friends
  </div>
</div>
<hr className="hr-line"></hr>


<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
       <img className="card-img-top" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap"/>
        <p className="card-text">Michael Tah.</p>
        <a href="#"  className="btn btn-primary">Friend Request</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
       <img className="card-img-top" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <p className="card-text">Tamara Wilson</p>
        <a href="#" onclick="disableFR()"
         className="btn btn-primary">Friend Request</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
       <img className="card-img-top" src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <p className="card-text">Samatha Perkins</p>
        <a href="#"  onclick="disableFR()" className="btn btn-primary">Friend Request</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
       <img className="card-img-top" src="https://images.pexels.com/photos/1125028/pexels-photo-1125028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
        <p className="card-text">Kevin Lee</p>
        <a href="#"  onclick="disableFR()" className="btn btn-primary">Friend Request</a>
      </div>
    </div>
  </div>
</div>


      </div>
    );
  }
}

export default discover;
