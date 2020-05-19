import React, { Component } from "react";
import Child from "./child";
import Cls from "./cls";
class Children extends Component {
  state = {
    children: [
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
      { name: "mark", cls: "odd" },
      { name: "nohir", cls: "even" },
    ],
    classes: ["odd", "even"],
  };
  render() {
    const { children, classes } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <Cls children={children} />
            {classes.map((cls) => (
              <Cls children={children.filter((child) => child.cls === cls)} />
            ))}
          </div>
          <div className="row">
            {children.map((child) => (
              <div className="col-2">
                <Child />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Children;
