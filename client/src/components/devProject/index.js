import React from "react";

function DevProject({ dev, num }) {
  return (
    <div>
      <h1>{num}</h1>
    </div>
  );
  //   const projArr = Array.from(dev.projects);
  //   const mappedProj = projArr.map((project) => {
  //     return (
  //       <div>
  //         <h1>{project.name}</h1>
  //       </div>
  //     );
  //   });
  //   return <div>{mappedProj}</div>;
}

export default DevProject;
