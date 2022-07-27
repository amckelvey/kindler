import React, { useState } from "react";
import { ADD_DEVELOPER_DATA } from "../utils/mutations";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Navigate, Link, useParams } from "react-router-dom";
import Auth from "../utils/auth";

function SignUpDevProfile() {
  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(
    userParam ? QUERY_SINGLE_DEVELOPER : QUERY_ME_DEV,
    { variables: { _id: userParam } }
  );

  const dev = data?.meDev || data?.developer || {};

  const link = `/${dev._id}/addproject`;

  const [formState, setFormState] = useState({
    name: dev.name,
    jobStatus: dev.job_status,
    position: dev.position,
    bio: dev.bio,
  });
  const [addDevInfo] = useMutation(ADD_DEVELOPER_DATA);

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

    brackets: {
      color: "#F2D700",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    colorOra: {
      color: "#CE9178",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    colorYellow: {
      color: "#F2D700",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    colorLightBlue: {
      color: "#9CDCFB",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },
    colorBlue: {
      color: "#179FF6",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    colorPurple: {
      color: "#C586C0",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    colorGreen: {
      color: "#649955",
      fontFamily: "Source Code Pro, monospace",
      fontWeight: "lighter",
    },

    slogan: {
      color: "#9CDCFB",
      fontSize: "25px",
      fontWeight: "300",
      letterSpacing: "3px",
      fontFamily: "Source Code Pro, monospace",
    },

    whtSemiColon: {
      color: "#FFFFFF",
      fontWeight: "lighter",
      fontFamily: "Source Code Pro, monospace",
    },
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDevInfo({
        variables: { ...formState },
      });
      setFormState({ ...formState });
      alert("Successfully Updated!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dev?._id) {
    return <h4>You need to be logged in to see this.</h4>;
  }
  return (
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2 style={styles.slogan}>
        <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
        DEVELOPER <span style={styles.brackets}>&#125;</span>
      </h2>
      <div style={styles.LeftBorder}>
        <h3 style={styles.colorGreen}>// SETUP YOUR PROFILE //</h3>
        <div style={styles.LeftBorder}>
          <h3 style={styles.colorBlue}>
            const{" "}
            <span style={styles.colorYellow}>
              myProfile<span style={styles.colorOra}>&#40;</span>
              <span style={styles.colorBlue}>&#123;</span>
            </span>
          </h3>
          <div style={styles.LeftBorder}>
            <form onSubmit={formSubmitHandler}>
              <div className="form-group">
              <h4 style={styles.colorGreen}> /name:/ </h4>
                {/* <label htmlFor="exampleInputEmail1">name: </label> */}
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  value={formState.name}
                  aria-describedby="emailHelp"
                  placeholder="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
              <h4 style={styles.colorGreen}> /status:/ </h4>
                {/* <label htmlFor="statusInput">status: </label> */}
                <select
                  name="jobStatus"
                  className="form-control"
                  id="statusInput"
                  value={formState.jobStatus}
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option value="Actively Looking">Actively Looking</option>
                  <option value="Casually Browsing">Casually Browsing</option>
                  <option value="Not Open To Work">Not Open To Work</option>
                </select>
              </div>
              <div className="form-group">
              <h4 style={styles.colorGreen}> /position:/ </h4>
                {/* <label htmlFor="positionInput">position: </label> */}
                <select
                  name="position"
                  className="form-control"
                  id="positionInput"
                  value={formState.position}
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Senior Software Engineer">
                    Senior Software Engineer
                  </option>
                  <option value="Front-End Developer">
                    Front-End Developer
                  </option>
                  <option value="Back-End Developer">Back-End Developer</option>
                  <option value="UX/UI Designer"> UX/UI Designer</option>
                </select>
              </div>
              <div className="form-group">
              <h4 style={styles.colorGreen}> /bio:/ </h4>
                {/* <label htmlFor="bioInput">bio: </label> */}
                <textarea
                  className="form-control"
                  id="bioInput"
                  name="bio"
                  value={formState.bio}
                  onChange={handleChange}
                  rows="5"
                  cols="40"
                />
              </div>

              <button type="submit" style={styles.button}>
                submit
              </button>
            </form>
          </div>
          <h3> <span style={styles.brackets}>&#125;</span><span style={styles.colorOra}>&#41;</span><span style={styles.whtSemiColon} >;</span></h3>
        </div>
        <h3 style={styles.colorYellow}>
          <span style={styles.colorBlue}>const</span> returnToProfile
          <span style={styles.colorOra}>&#40;</span>
          <span style={styles.colorBlue}>&#123;</span>
        </h3>
        <div style={styles.LeftBorder}>
          <Link to="/me" style={styles.button}>
            click here!
          </Link>
        </div>
        <h3> <span style={styles.brackets}>&#125;</span><span style={styles.colorOra}>&#41;</span><span style={styles.whtSemiColon} >;</span></h3>

        <h3 style={styles.colorYellow}>
          <span style={styles.colorBlue}>const</span> addProject
          <span style={styles.colorOra}>&#40;</span>
          <span style={styles.colorBlue}>&#123;</span>
        </h3>
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

export default SignUpDevProfile;
