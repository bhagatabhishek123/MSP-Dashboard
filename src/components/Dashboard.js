import React, { useState } from "react";
import Infinity from "../images/Infinity.png";

import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = (props) => {
  console.log(props);
  return (
    <div className="dashboard">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <span className="navbar-brand">MSP Dashboard</span>
        </div>
      </nav>
      <div className="">
        <ul class="list-group">
          <Link to="/looker">
            <li class="list-group-item">Maps API Billing Data</li>
          </Link>
          <Link to="/freshdesk">
            <li class="list-group-item">MSP Freshdesk</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
