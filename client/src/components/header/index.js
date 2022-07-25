import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import Auth from "../../utils/auth";

const styles = {
  navbarstyle: {
    width: "100%",
    height: "4.5vw",
    display: "flex",
    fontFamily: "Source Code Pro, monospace",
    letterSpacing: "2.5px",
    justifyContent: "left",
    paddingLeft: "3vw",
    background: "#333333",
  },

  iconBracket: {
    color: "#179FF6",
    fontSize: "2vw",
    fontFamily: "Source Code Pro, monospace",
    justifyContent: "space-around",
    alignContent: "center",
    background: "transparent",
    border: "none",
    padding: "1vw",
  },

  navbarbutton: {
    color: "#C586C0",
    fontSize: "1.2vw",
    fontFamily: "Source Code Pro, monospace",
    justifyContent: "space-around",
    alignContent: "center",
    background: "transparent",
    border: "none",
    padding: "1vw",
    paddingLeft: "4vw",
    fontWeight: "100",
    marginTop: "0.5vw",
  },

  whtSemiColon: {
    color: "#FFFFFF",
    fontSize: "1.2vw",
    fontWeight: "100",
  },
};

export default function Header() {
  if (!Auth.loggedIn()) {
    return (
      <nav className="navbar" style={styles.navbarstyle}>
        <div>
          <Link to="/">
            <button
              style={styles.iconBracket}
              className="logo navbutton"
              
            >
              [&nbsp;]
            </button>
          </Link>
        </div>
        <div>
          <button
            style={styles.navbarbutton}
            className="navbutton"
            onClick={() => alert("This is our website")}
          >
            Learn<span style={styles.whtSemiColon}>;</span>
          </button>
        </div>
        <div>
          <button
            style={styles.navbarbutton}
            className="navbutton"
            onClick={() => alert("Stay safe")}
          >
            Safety<span style={styles.whtSemiColon}>;</span>
          </button>
        </div>
        <div>
          <button
            style={styles.navbarbutton}
            className="navbutton"
            onClick={() => alert("Need help? Me too!!")}
          >
            Support<span style={styles.whtSemiColon}>;</span>
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
