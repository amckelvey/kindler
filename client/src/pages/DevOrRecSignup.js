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
    },

    brackets: {
      color: "#F2D700",
    },

    colorOra: {
      color: "#CE9178",
    },

    colorYellow: {
      color: "#F2D700",
    },

    colorLightBlue: {
      color: "#9CDCFB",
    },

    colorPurple: {
      color: "#C586C0",
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
      <div>
        <div className="sloganContainer" style={styles.LeftBorder}>
          <div className="sloganContainer" style={styles.LeftBorder}>
            <h2 style={styles.slogan}>
              <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
              <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
              DEVELOPER <span style={styles.brackets}>&#125;</span>
            </h2>
            <div style={styles.LeftBorder}>
              <div style={styles.LeftBorder}>
                <p>
                  <p>
                    <span style={styles.colorOra}>'sign up'</span>
                    'sign up'<span>;</span>
                    <span>;</span>
                  </p>
                </p>
                <div style={styles.LeftBorder}>
                  <div style={styles.LeftBorder}>
                    <p>
                      <p>
                        <span style={styles.colorPurple}>if &#40; </span>
                        if &#40; <span>developer</span> &#41; &#123;
                        <span style={styles.colorLightBlue}>developer</span>
                        <span style={styles.colorPurple}> &#41; &#123; </span>
                      </p>
                    </p>
                    <div style={styles.LeftBorder}>
                      <div style={styles.LeftBorder}>
                        <p>
                          <p>
                            click <span style={styles.colorYellow}>here</span>;
                            &nbsp; click <span>here</span>; &nbsp; &nbsp; &nbsp;
                            <Link to="/signupdev" style={styles.button}>
                              <Link to="/signupdev" style={styles.button}>
                                developer developer
                              </Link>
                            </Link>
                          </p>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p style={styles.colorPurple}>&#125; else &#123;</p>
                        <p>&#125; else &#123;</p>
                        <div style={styles.LeftBorder}>
                          <div style={styles.LeftBorder}>
                            <p>
                              <p>
                                click{" "}
                                <span style={styles.colorYellow}>here</span>;
                                &nbsp; click <span>here</span>; &nbsp; &nbsp;
                                &nbsp;
                                <Link to="/signuprec" style={styles.button}>
                                  <Link to="/signuprec" style={styles.button}>
                                    recruiter recruiter
                                  </Link>
                                </Link>
                              </p>
                            </p>
                          </div>
                        </div>
                        <span style={styles.colorPurple}>&#125;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevRecSignup;
