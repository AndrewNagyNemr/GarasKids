import React, { Component } from "react";
import Chart from "./bar-chart/bar-chart";
class MoodAndHappiness extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <h5>Mood & Happiness</h5>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-4 pl-4">
                <span style={{ fontSize: 40 }}>&#128522;</span>
              </div>
              <div className="col-4 pl-4">
                <span style={{ fontSize: 40 }}>&#128528;</span>
              </div>
              <div className="col-4 pl-4">
                <span style={{ fontSize: 40 }}>&#128546;</span>
              </div>
            </div>
            <Chart />
          </div>
          <div className="col-4">
            <a href="">D</a>/<a href="">W</a>/<a href="">M</a>/<a href="">Y</a>
          </div>
        </div>
      </div>
    );
  }
}

export default MoodAndHappiness;
