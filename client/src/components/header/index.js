import React from "react";
import "./navMain.css";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import Auth from "../../utils/auth";

export default function Header() {
  if (!Auth.loggedIn()) {
    return (
      <nav className="navbar">
        <div>
          <button
            className="logo navbutton"
            onClick={() => alert("this is our home")}
          >
            [ &nbsp;]
          </button>
        </div>
        <div>
          <button
            className="navbutton"
            onClick={() => alert("This is our website")}
          >
            Learn
          </button>
        </div>
        <div>
          <button className="navbutton" onClick={() => alert("Stay safe")}>
            Safety
          </button>
        </div>
        <div>
          <button
            className="navbutton"
            onClick={() => alert("Need help? Me too!!")}
          >
            Support
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="navbar">
          <div>
            <Link to="/">
              <button className="logo navbutton">[ &nbsp;]</button>
            </Link>
          </div>
          <div>
            <button
              className="navbutton"
              onClick={() => alert("This is our website")}
            >
              Learn
            </button>
          </div>
          <div>
            <button className="navbutton" onClick={() => alert("Stay safe")}>
              Safety
            </button>
          </div>
          <div>
            <button
              className="navbutton"
              onClick={() => alert("Need help? Me too!!")}
            >
              Support
            </button>
          </div>
          <div>
            <Link to="/me">
              <button className="navbutton">Profile</button>
            </Link>
          </div>
        </div>
        <div className="logoutBtnDiv">
          <LogoutBtn />
        </div>
      </nav>
    );
  }
}
