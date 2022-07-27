import React from "react";
import { Link } from "react-router-dom";

function DevRecSignup() {
  const styles = {
    LeftBorder: {
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 1em",
      margin: "10px 2em",
      letterSpacing: "3px",
      color: "white",
    },

    slogan: {
      color: "#9CDCFB",
      fontSize: "25px",
      fontWeight: "300",
      letterSpacing: "3px",
      fontFamily: "Source Code Pro, monospace",
    },

    brackets: {
      color: "#F2D700",
      fontFamily: "Source Code Pro, monospace",
    },

    colorOra: {
      color: "#CE9178",
      fontFamily: "Source Code Pro, monospace",
    },

    colorYellow: {
      color: "#F2D700",
      fontFamily: "Source Code Pro, monospace",
    },

    colorLightBlue: {
      color: "#9CDCFB",
      fontFamily: "Source Code Pro, monospace",
    },

    colorPurple: {
      color: "#C586C0",
      fontFamily: "Source Code Pro, monospace",
    },

    button: {
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "15px",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      width: "24vw",
      height: "10vh",
      textDecoration: "none",
      paddingLeft: "10px",
      paddingRight: "10px",
      fontFamily: "Source Code Pro, monospace",
    },
  };

  return (
    <div>
      <div className="sloganContainer" style={styles.LeftBorder}>
        <h2 style={styles.slogan}>
          <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
          DEVELOPER <span style={styles.brackets}>&#125;</span>
        </h2>
        <div style={styles.LeftBorder}>
          <p>
            <span style={styles.colorOra}>'sign-up'</span>
            <span>;</span>
          </p>
          <div style={styles.LeftBorder}>
            <p>
              <span style={styles.colorPurple}>if &#40;</span>
              <span style={styles.colorLightBlue}>developer<span style={styles.colorPurple}>&#41; &#123; </span></span>

            </p>
            <div style={styles.LeftBorder}>
              <p>
                click <span style={styles.colorYellow}>here</span>; &nbsp;
                &nbsp;
                <Link to="/signupdev" style={styles.button}>
                  developer
                </Link>
              </p>
            </div>
            <div>
              <p style={styles.colorPurple}>&#125; else&#123;</p>
              <div style={styles.LeftBorder}>
                <p>
                  click <span style={styles.colorYellow}>here</span>; &nbsp;
                  &nbsp;
                  <Link to="/signuprec" style={styles.button}>
                    recruiter
                  </Link>
                </p>
              </div>
              <span style={styles.colorPurple}>&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevRecSignup;
