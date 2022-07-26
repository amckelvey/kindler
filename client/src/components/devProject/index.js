import React from "react";

function DevProject({ dev, num }) {
  console.log(dev.projects[0].name);
  return (
    <div>
      <h1>{dev.projects[0].name}</h1>
    </div>

    // const projArr = Array.from(dev.projects);
    // const mappedProj = projArr.map((project) => {
    //   return (
    //     <div>
    //       <h1>{project.name}</h1>
    //     </div>
    //   );
    // });
    // return <div>{mappedProj}</div>;
  );
}

export default DevProject;
