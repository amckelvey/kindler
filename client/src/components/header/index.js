import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import Auth from "../../utils/auth";
import './header.css'

const styles = {
  navbarstyle: {
    width: "100%",
    height: "4.5vh",
    display: "flex",
    fontFamily: "Source Code Pro, monospace",
    letterSpacing: "2.5px",
    justifyContent: "left",
    background: "#333333",
  },

  iconBracket: {
    color: "#179FF6",
    fontSize: "1em",
    fontFamily: "Source Code Pro, monospace",
    justifyContent: "space-around",
    alignContent: "center",
    background: "transparent",
    border: "none",
  },

  navbarbutton: {
    color: "#C586C0",
    fontSize: '1em',
    fontFamily: "Source Code Pro, monospace",
    justifyContent: "space-around",
    alignContent: "center",
    background: "transparent",
    border: "none",
    padding: "2vh 15px",
    fontWeight: "100",
    textDecoration: "none"
  },
  
  mainbuttons: {
    display: "flex",
    flex: "1",
    alignItems: "center"
  },

  userbuttons: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px"
  },

  userbutton: {
    color: "#CE9178",
    border: "2px solid #FFFFFF",
    borderRadius: "30px",
    fontSize: "1.5vw",
    letterSpacing: "2.5px",
    backgroundColor: "transparent",
    width: "120px",
    height: "30px",
    fontWeight: "bolder",
  },

  profilebutton: {
    color: "#CE9178",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    letterSpacing: "2.5px",
    backgroundColor: "transparent",
    width: "120px",
    height: "30px",
    fontWeight: "bolder",
  },

  whtSemiColon: {
    color: "#FFFFFF",
    fontSize: "1.2vw",
    fontWeight: "300",
  },

  logoutbutton: {
    fontFamily: "Source Code Pro, monospace",
    background: "transparent",
    border: "none",
  },
};

export default function Header() {
  return (
    <nav className="navbar" style={styles.navbarstyle}>
      <div style={styles.mainbuttons}>
        <div>
          <Link to="/">
            <button style={styles.iconBracket}>[&nbsp;]</button>
          </Link>
        </div>
        <div className="hider">
          <Link to="/legal" >
            <button style={styles.navbarbutton}>
              Learn<span className="makeSmall" style={styles.whtSemiColon}>;</span>
            </button>
          </Link>
        </div>
        <div className="hider">
          <button style={styles.navbarbutton} onClick={() => alert("Stay safe")}>
            Safety<span style={styles.whtSemiColon}>;</span>
          </button>
        </div>
        <div className="hider">
          <Link to="/support"
            style={styles.navbarbutton}
          
          >
            Support<span style={styles.whtSemiColon}>;</span>
          </Link>
        </div>
      </div>
      {Auth.loggedIn() ? (
        <div style={styles.userbuttons}>
          <div>
            <Link to="/me">
              <button style={styles.profilebutton}>'profile'</button>
            </Link>
          </div>

          <div className="logoutBtnDiv" style={styles.userb}>
            <LogoutBtn />
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}