import React, { Component } from "react";
import CustomNavbar from "./CustomNavbar/CustomNavbar";
import Children from "./children/children";
import LogIn from "./authentication/login";
import Dashboard from "./Dashboard";
import ChildProfile from './child-profile/child-profile';
import {Route} from "react-router-dom";
import Layout from './Layout/Layout';

import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <Layout>

        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/children" exact component={Children} />
        <Route path="/child-profile" exact component={ChildProfile} />

        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
