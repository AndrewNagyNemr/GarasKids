import React, { Component } from "react";
import moment from "moment";

class Calendar extends Component {
  state = {};
  render() {
    const weekdayshort = moment.weekdaysShort();
    console.log(weekdayshort);

    return (
      <React.Fragment>
        <h1>Calendar</h1>
      </React.Fragment>
    );
  }
}

export default Calendar;
