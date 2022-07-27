import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";

function AddProject() {
  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(
    userParam ? QUERY_SINGLE_DEVELOPER : QUERY_ME_DEV,
    { variables: { _id: userParam } }
  );
  const dev = data?.meDev || data?.developer || {};

  // const link = `/${dev._id}/addproject`;
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    source: "",
    link: "",
  });
  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: QUERY_ME_DEV }, "meDev"],
  });

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
      setFormState({ ...formState });
      alert("Successfully Added Project!");
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

  return (
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2 style={styles.slogan}>
        <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
        DEVELOPER <span style={styles.brackets}>&#125;</span>
      </h2>
      <div style={styles.LeftBorder}>
        <h3 style={styles.colorGreen}>// ADD YOUR PROJECT //</h3>
        <div style={styles.LeftBorder}>
          <h3 style={styles.colorBlue}>
            const{" "}
            <span style={styles.colorYellow}>
              myProject<span style={styles.colorOra}>&#40;</span>
              <span style={styles.colorBlue}>&#123;</span>
            </span>
          </h3>
          <div style={styles.LeftBorder}>
            <form onSubmit={formSubmitHandler}>
              <div className="form-group">
                <h4 style={styles.colorGreen}> /your name:/ </h4>
                {/* <label style={styles.colorLightBlue} htmlFor="nameInput">name: </label> */}
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  value={formState.name}
                  placeholder="name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <h4 style={styles.colorGreen}> /source code link:/ </h4>
                {/* <label style={styles.colorLightBlue} htmlFor="nameInput">source code link: </label> */}
                <input
                  placeholder="source code link"
                  type="text"
                  name="source"
                  className="form-control"
                  id="souceInput"
                  value={formState.source}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <h4 style={styles.colorGreen}> /deployed link:/ </h4>
                {/* <label style={styles.colorLightBlue} htmlFor="nameInput"> */}
                {/* deployed link:{" "} */}
                {/* </label> */}
                <input
                  placeholder="deployed link"
                  type="text"
                  name="link"
                  className="form-control"
                  id="linkInput"
                  value={formState.link}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <h4 style={styles.colorGreen}> /description:/ </h4>
                {/* <label style={styles.colorLightBlue} htmlFor="bioInput">
                  description:{" "}
                </label> */}
                <textarea
                  placeholder="project description"
                  className="form-control"
                  id="descriptionInput"
                  name="description"
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
      </div>
    </div>
  );
}

export default AddProject;
