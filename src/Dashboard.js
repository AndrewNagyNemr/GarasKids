import React, { Component } from "react";
import ClassesAttendanceDetails from "./dashboard/class-attendance-details/class-attendance-details";
import ChildrenCapacityDetails from "./dashboard/children-capacity-details/children-capacity-details";
import MoodAndHappiness from "./dashboard/mood-and-happiness/mood-and-happines";
import Rating from "./dashboard/rating/rating";
import ParentSatisfaction from "./upcomming-features/parent-satisfaction";
import ChildrenProgressAndImprovment from "./upcomming-features/children-progress-and-improvment";
import Events from "./upcomming-features/events";
import ActivityList from "./upcomming-features/activity-list";
import Requests from "./upcomming-features/requests";
import { getClasses } from "./FakeData/Classes";
import { getWaitngListNmber } from "./FakeData/WaitingList";
import { getAbsenceToday } from "./FakeData/Absence";

class Dashboard extends Component {
  state = {
    classes: getClasses(),
    waitingListNumber: getWaitngListNmber(),
    absentStudents: getAbsenceToday(),
  };
  render() {
    const { classes, waitingListNumber, absentStudents } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <ClassesAttendanceDetails
                classes={classes}
                absentStudents={absentStudents}
              />
              <ChildrenCapacityDetails
                classes={classes}
                waitingListNumber={waitingListNumber}
              />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-8">
                  <MoodAndHappiness />
                </div>
                <div className="col-4">
                  <Events />
                </div>
              </div>
              <ParentSatisfaction />
              <ChildrenProgressAndImprovment />
            </div>
            <div className="col-2">
              <Rating />
              <ActivityList />
              <Requests />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
