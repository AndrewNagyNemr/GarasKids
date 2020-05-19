import React, { Component } from "react";
import StarRating from "../star-rating/star-rating";

class ClassesAttendanceDetails extends Component {
  state = {
    staff: {
      total: 50,
      present: 35,
    },
    attendance: 18,
  };
  render() {
    const { classes, absentStudents } = this.props;
    const { staff, attendance } = this.state;
    return (
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Daily Attendance</th>
            <th>
              {this.totalAttendance(classes)}/{this.totalRegisterd(classes)}
            </th>
            <th>
              {staff.present}/{staff.total}
            </th>
          </tr>
        </thead>
        {/* <h5>Daily Attendance</h5> */}
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>
                <StarRating rate={cls.rate} />
              </td>
              <td>{cls.name}</td>
              <td>
                {attendance}/{cls.capacity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  totalAttendance(classes) {
    return this.totalRegisterd(classes) - this.props.absentStudents.length;
  }
  totalRegisterd(classes) {
    let total = 0;
    for (let cls of classes) total += cls.registerd;
    return total;
  }
}

export default ClassesAttendanceDetails;
