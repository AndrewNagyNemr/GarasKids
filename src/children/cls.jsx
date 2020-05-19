import React, { Component } from "react";
class Cls extends Component {
  state = {
    cls: {
      name: 9,
      total: 20,
      absent: 2,
    },
  };
  render() {
    const { cls } = this.state;
    return (
      <div className="col-1">
        <div className="card my-2">
          <div className="card-body">
            <p className="card-text">
              <small>
                c{cls.name} {cls.total - cls.absent}/{cls.total}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cls;
