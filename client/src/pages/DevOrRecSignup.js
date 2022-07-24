import React from "react";
import { Link } from "react-router-dom";

function DevRecSignup() {
  const styles = {
    LeftBorder: {
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 1em",
      margin: "10px 2em",
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
    },
  };
  return (
    <div>
      <div className="sloganContainer" style={styles.LeftBorder}>
        <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
        <div style={styles.LeftBorder}>
          <p>
            'sign up'<span>;</span>
          </p>
          <div style={styles.LeftBorder}>
            <p>
              if &#40; <span>developer</span> &#41; &#123;
            </p>
            <div style={styles.LeftBorder}>
              <p>
                click <span>here</span>; &nbsp; &nbsp;
                <Link to="/signupdev" style={styles.button}>
                  developer
                </Link>
              </p>
            </div>
            <div>
              <p>&#125; else &#123;</p>
              <div style={styles.LeftBorder}>
                <p>
                  click <span>here</span>; &nbsp; &nbsp;
                  <Link to="/signuprec" style={styles.button}>
                    recruiter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevRecSignup;
