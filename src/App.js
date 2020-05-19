import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
import Children from "./children/children";
import LogIn from "./authentication/login";
import Dashboard from "./Dashboard";
import ChildProfile from './child-profile/child-profile';
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/children" exact component={Children} />
          <Route path="/child-profile" exact component={ChildProfile} />
          {/* <Route path="/login" component={LogIn}/> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
