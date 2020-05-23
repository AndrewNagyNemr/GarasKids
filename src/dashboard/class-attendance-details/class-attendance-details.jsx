import React, { Component } from "react";
import StarRating from "../star-rating/star-rating";

import './class-attendance-details.css';

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
      // add div with class content-background to make general styles
      <div className="content-background">
        <h3 className="main_head">Daily Attendance</h3>

        {/* div of general details */}
        <div className="attendance_bref my-3">
          <h4 className="text-center date_head">Today:24 May 2020</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="attendance_content total">
                <h5>Total</h5>
                <p className="p_number">{staff.total}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="attendance_content present">
                <h5>Present</h5>
                <p className="p_number">{staff.present}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="attendance_content absent">
                <h5>Absent</h5>
                  <p className="p_number">{this.props.absentStudents.length}</p>
              </div>
            </div>
          </div>
        </div>


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
      </div>
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
