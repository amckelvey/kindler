import React from "react";
import Auth from "../utils/auth";
import { TypeOrFieldNameRegExp } from "@apollo/client/cache/inmemory/helpers";

const styles = {
  LeftBorder: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
  },
};

const Login = () => {
  if (!Auth.loggedIn()) {
    return (
      <div>
        <div className="sloganContainer" style={styles.LeftBorder}>
          <div>
            <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
            <div style={styles.LeftBorder}>
              <h3>
                'sign in'<span>;</span>
              </h3>
            </div>
          </div>
        </div>
        <br />
        <div></div>
      </div>
    );
  }
};

export default Login;
