import React, { useState } from "react";

import { Navigate, Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";
import Auth from "../utils/auth";

function DevProfile() {
  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(
    userParam ? QUERY_SINGLE_DEVELOPER : QUERY_ME_DEV,
    { variables: { _id: userParam } }
  );

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
      color: "white",
    },
    button: {
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "15px",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      textDecoration: "none",
      paddingLeft: "10px",
      paddingRight: "10px",
      marginTop: "10px",
    },
  };

  const link = `/${dev._id}/edit`;

  return (
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
      <div style={styles.LeftBorder}>
        <h3>// My Profile //</h3>
        <div style={styles.LeftBorder}>
          <h3>
            const <span>myProfile &#40;</span>&#123;
          </h3>
          <div style={styles.LeftBorder}>
            <p>
              name: <span>"{dev.name}"</span>
            </p>
            <p>
              email: <span>"{dev.email}"</span>
            </p>
            <p>
              position: <span>"{dev.position}"</span>
            </p>
            <p>
              job_status: <span>"{dev.job_status}"</span>
            </p>
            <p>
              bio: <span>"{dev.bio}"</span>
            </p>
          </div>
          <div style={styles.LeftBorder}></div>
          <h3> &#125;&#41;;</h3>
        </div>
        <h3>Edit Your Profile &#123;</h3>
        <div style={styles.LeftBorder}>
          <Link to={link} style={styles.button}>
            click here!
          </Link>
        </div>
        <h3>&#125;</h3>
      </div>
    </div>
  );
}

export default DevProfile;
