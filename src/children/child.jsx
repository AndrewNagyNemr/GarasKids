import React, { Component } from "react";
class Child extends Component {
  state = {};
  render() {
    return (
      <div className="card my-2">
        <img
          src={"https://dummyimage.com/200x150/000/fff"}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text">Some quick example</p>
        </div>
      </div>
    );
  }
}

export default Child;
