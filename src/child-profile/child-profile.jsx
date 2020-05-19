import React, { Component } from "react";

class ChildProfile extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <h5>Date Tuesday 15/5/2017 </h5>
        <div className="row">
          <div className="col-2">
            <div className="card my-2">
              <img
                src={"https://dummyimage.com/200x150/000/fff"}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">Some quick example</p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button> -v-
            <button className="btn btn-primary m-2">Button</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChildProfile;
