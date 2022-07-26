import React from "react";
import { Link } from "react-router-dom";

function DevProject({ dev }) {
  const styles = {
    container: {
      display: "flex",
      maxWidth: "400px",
      border: "1px solid white",
      borderRadius: "15px",
      margin: "2em auto",
      padding: "2em"
    },
    card: {
      paddingLeft: "20px",
    },
    h1: {
      color: "#CE9178",
      margin: "0px",
    },
    p: {
      color: "#A8A8A8",
    },
    link: {
      color: "#9CDCFB",
      
    },
  };
  return dev.projects.map((project) => {
    return (
      <div key={project._id} style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.h1}>Project: {project.name}</h1>
          <p style={styles.p}>{project.description}</p>
          <a href={project.source} target="_blank" style={styles.link}>Source Code</a>
          <br />
          <a href={project.link} target="_blank" style={styles.link}>Deployed Application</a>
          <br />
        </div>
      </div>
    );
  });
}

export default DevProject;
