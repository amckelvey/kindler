import React from "react";
import Projects from "../components/projects/index";
import Auth from "../utils/auth";
// import { useLazyQuery } from "@apollo/client";

import { QUERY_DEVELOPERS } from "../utils/queries";

// const { loading, data } = useLazyQuery(QUERY_DEVELOPERS);
// const developers = data?.developers || [];

const styles = {
  sloganContainer: {
    borderLeft: "solid 1px #7B7B7B",
    padding: "0 2em",
    margin: "10px 4em",
    marginBottom: "8vw",
  },

  slogan: {
    color: "#9CDCFB",
    fontFamily: "Source Code Pro, monospace",
    fontSize: "3vw",
    fontWeight: "100",
    letterSpacing: "3px",
  },

  brackets: {
    color: "#F2D700",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  button: {
    flex: "1",
  },
  LeftBorder: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
  },
};

const ReviewProjects = () => {
  return (
    <div>
      <div className="container" style={styles.container}>
        <div>
          <h2 style={styles.slogan}>
            <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
            DEVELOPER <span style={styles.brackets}>&#125;</span>
          </h2>
        </div>
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default ReviewProjects;
