import React, { useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";
import Auth from "../utils/auth";
import { REMOVE_PROJECT } from "../utils/mutations";
import "./SignUpDevProfile.css"

function DevProfile() {
  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(
    userParam ? QUERY_SINGLE_DEVELOPER : QUERY_ME_DEV,
    { variables: { _id: userParam } }
  );

  const [removeProject] = useMutation(REMOVE_PROJECT, {
    refetchQueries: [{ query: QUERY_ME_DEV }, "meDev"],
  });
  const dev = data?.meDev || data?.developer || {};
  console.log(dev);
  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Navigate to="/me" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dev?._id) {
    return <h4>You need to be logged in to see this.</h4>;
  }

  const styles = {
    LeftBorder: {
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 1em",
      margin: "10px 2em",
      letterSpacing: "3px",
      color: "white",
      fontFamily: "Source Code Pro, monospace",

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
    card: {
      maxWidth: "400px",
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "15px",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      textDecoration: "none",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "5px",
      fontFamily: "Source Code Pro, monospace",
    },
    textColor: {
      color: "#649955",
    },

    whtSemiColon: {
      color: "#FFFFFF",
      fontWeight: "lighter",
      fontFamily: "Source Code Pro, monospace",
    },
  };

  const link = `/${dev._id}/edit`;

  // async function clickHander(event) {
  //   event.preventDefault();
  //   const { data } = await removeProject({
  //     variables: id,
  //   });
  // }

  return (
    <div className="smallertext" style={styles.LeftBorder} >
       <h2 style={styles.slogan} className="smallertext">
          <span style={styles.brackets} className="smallertext">&#123;</span> #COMMIT TO YOUR RIGHT
          DEVELOPER <span style={styles.brackets} className="smallertext">&#125;</span>
        </h2>
      <div style={styles.LeftBorder} className="smallertext">
        <h3 style={styles.colorGreen}>/My Profile/</h3>
        <div style={styles.LeftBorder}>
          <h3 style={styles.colorBlue}>
            const <span style={styles.colorYellow}>myProfile<span style={styles.colorOra}>&#40;</span><span style={styles.colorBlue}>&#123;</span></span>
          </h3>
          <div style={styles.LeftBorder}>
            <p style={styles.colorLightBlue}>
              name: <span>"{dev.name}"</span><span style={styles.whtSemiColon} >;</span>
            </p>
            <p style={styles.colorLightBlue}>
              email: <span>"{dev.email}"</span> <span style={styles.whtSemiColon} >;</span>
            </p>
            <p style={styles.colorLightBlue}>
              position: <span>"{dev.position}"</span> <span style={styles.whtSemiColon} >;</span>
            </p>
            <p style={styles.colorLightBlue}>
              job_status: <span>"{dev.job_status}"</span> <span style={styles.whtSemiColon} >;</span>
            </p>
            <p style={styles.colorLightBlue}>
              bio: <span>"{dev.bio}"</span> <span style={styles.whtSemiColon} >;</span>
            </p>
          </div>

          <h3> <span style={styles.brackets}>&#125;</span><span style={styles.colorOra}>&#41;</span><span style={styles.whtSemiColon} >;</span></h3>
        </div>
        <h3 style={styles.colorPurple} className="smallertext">Edit Your Profile <span style={styles.brackets}>&#123;</span> </h3>
        <div style={styles.LeftBorder}>
          <Link to={link} style={styles.button} className="smallertext">
            click here!
          </Link>
        </div>
        <h3  style={styles.brackets} >&#125;</h3>
        <h3 style={styles.colorPurple} >Projects <span style={styles.brackets}>&#123;</span> </h3>

        {dev.projects.map((project) => {
          return (
            <div className="container" key={project._id}>
              <div className="card" style={styles.card}>
                <h5 style={styles.textColor}>name: {project.name}</h5>
                <h5 style={styles.textColor}>
                  source code link: {project.source}
                </h5>
                <h5 style={styles.textColor}>deployed link: {project.link}</h5>
                <h5 style={styles.textColor}>
                  description: {project.description}
                </h5>
                <button
                  onClick={() => {
                    removeProject({
                      variables: {
                        projectId: project._id,
                      },
                    });
                  }}
                >
                  Delete Project
                </button>
              </div>
            </div>
          );
        })}
        <h3  style={styles.brackets} >&#125;</h3>
      </div>
    </div>
  );
}

export default DevProfile;
