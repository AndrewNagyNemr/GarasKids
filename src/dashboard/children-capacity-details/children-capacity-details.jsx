import React, { Component } from "react";
class ChildrenCapacityDetails extends Component {
  render() {
    const { classes, waitingListNumber } = this.props;
    return (
      <React.Fragment>
        <h5>Children</h5>
        <table className="table">
          {/* <thead>
          <tr>
          <th>Children</th>
            <th colSpan="3"></th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <td>Capacity</td>
              <td>{this.getClassesCapacity(classes)}</td>
              <td>Register</td>
              <td>{this.getRegisterNumber(classes)}</td>
            </tr>
            <tr>
              <td>Available</td>
              <td>
                {this.getClassesCapacity(classes) -
                  this.getRegisterNumber(classes)}
              </td>
              <td>Waiting</td>
              <td>{waitingListNumber}</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  getClassesCapacity(classes) {
    let capacity = 0;
    for (let cls of classes) {
      capacity += cls.capacity;
    }
    return capacity;
  }
  getRegisterNumber(classes) {
    let registerd = 0;
    for (let cls of classes) {
      registerd += cls.registerd;
    }
    return registerd;
  }
}

export default ChildrenCapacityDetails;
