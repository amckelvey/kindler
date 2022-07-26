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

  logoutbutton: {
    fontFamily: "Source Code Pro, monospace",
    margin: "1em",
    background: "transparent",
    border: "none",
    marginTop: "0.5vw",
  },
};

export default function Header() {
  return (
    <nav className="navbar" style={styles.navbarstyle}>
      <div>
        <Link to="/">
          <button style={styles.iconBracket}>[&nbsp;]</button>
        </Link>
      </div>
      <div>
        <button
          style={styles.navbarbutton}
          onClick={() => alert("This is our website")}
        >
          Learn<span style={styles.whtSemiColon}>;</span>
        </button>
      </div>
      <div>
        <button style={styles.navbarbutton} onClick={() => alert("Stay safe")}>
          Safety<span style={styles.whtSemiColon}>;</span>
        </button>
      </div>
      <div>
        <button
          style={styles.navbarbutton}
          onClick={() => alert("Need help? Me too!!")}
        >
          Support<span style={styles.whtSemiColon}>;</span>
        </button>
      </div>
      {Auth.loggedIn() ? (
        <>
          <div>
            <Link to="/me">
              <button style={styles.navbarbutton}>Profile</button>
            </Link>
          </div>

          <div className="logoutBtnDiv" style={styles.logoutbutton}>
            <LogoutBtn />
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}
