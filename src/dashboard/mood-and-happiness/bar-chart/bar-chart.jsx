import React, { Component } from "react";
import {BarChart,Bar} from "recharts";

class Chart extends Component {
  state = {
    data: [
      {
        name: "Page A",
        uv: 4000,
      },
      {
        name: "Page B",
        uv: 3000,
      },
      {
        name: "Page C",
        uv: 2000,
      },
    ],
  };
  render() {
      const {data} = this.state
    return (
      <BarChart width={300} height={120} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default Chart;
