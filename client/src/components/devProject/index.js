import React from "react";

function DevProject({ dev }) {
  const style = {
    border: {
      border: "1px solid white",
    },
  };
  return dev.projects.map((project) => {
    return (
      <div key={project._id} style={style.border}>
        <h1>{project.name}</h1>
        <h1>{project.description}</h1>
        <h1>{project.source}</h1>
        <h1>{project.link}</h1>
      </div>
    );
  });
}

export default DevProject;
