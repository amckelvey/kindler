import React from "react";
import { Link } from "react-router-dom";

function SignUpDevProject() {
  const styles = {
    LeftBorder: {
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 1em",
      margin: "10px 2em",
      color: "white",
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
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
      <div style={styles.LeftBorder}>
        <h3>// SET UP YOUR PROFILE //</h3>
        <div style={styles.LeftBorder}>
          <h3>
            const <span>myProfile &#40;</span>&#123;
          </h3>
          <div style={styles.LeftBorder}>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">name: </label>
                <input
                  type="name"
                  className="form-control"
                  id="nameInput"
                  aria-describedby="emailHelp"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="statusInput">status: </label>
                <input type="text" className="form-control" id="statusInput" />
              </div>
              <div className="form-group">
                <label htmlFor="positionInput">position: </label>
                <input
                  type="text"
                  className="form-control"
                  id="positionInput"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bioInput">bio: </label>
                <textarea className="form-control" id="bioInput" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <h3> &#125;&#41;;</h3>

          <p>upload your picture</p>
          <div style={styles.LeftBorder}>
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
          </div>
          <p>add a project</p>
          <div style={styles.LeftBorder}>
            <Link to="/" style={styles.button}>
              click here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpDevProject;
