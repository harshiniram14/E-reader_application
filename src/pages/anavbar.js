import React from "react";
import { Link } from "react-router-dom";
import "../assets/anavbar.css";

function Anavbar() {
  return (
    <div className="nav">
      <a href="/anavbar" className="optn">
        Flip-min
      </a>
      <div className="nav-links">
        <Link to="/addbk">Add</Link>
        <Link to="/editbk">Edit</Link>
        <Link to="/deletebk">Delete</Link>
        <Link to="/view">View</Link>
      </div>
      <Link to="/landingpage">
        <button className="logout-btn">Logout</button>
      </Link>
    </div>
  );
}

export default Anavbar;
