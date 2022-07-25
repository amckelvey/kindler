import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";
import Auth from "../utils/auth";

function AddProject() {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    source: "",
    link: "",
  });

  const [addProject] = useMutation(ADD_PROJECT);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
      setFormState({ ...formState });
      alert("Successfully Added Project!");
      document.location.reload();
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
    },
  };
  return (
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
      <div style={styles.LeftBorder}>
        <h3>// ADD YOUR PROJECT //</h3>
        <div style={styles.LeftBorder}>
          <h3>
            const <span>myProject &#40;</span>&#123;
          </h3>
          <div style={styles.LeftBorder}>
            <form>
              <div className="form-group">
                <label htmlFor="nameInput">name: </label>
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
                <label htmlFor="nameInput">source code link: </label>
                <input
                  type="text"
                  name="source"
                  className="form-control"
                  id="souceInput"
                  value={formState.source}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">deployed link: </label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  id="linkInput"
                  value={formState.link}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bioInput">description: </label>
                <textarea
                  className="form-control"
                  id="bioInput"
                  name="bio"
                  value={formState.bio}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" style={styles.button}>
                submit
              </button>
            </form>
          </div>
          <h3> &#125;&#41;;</h3>
        </div>
        <h3>
          <span>const</span> returnToProfile &#123;
        </h3>
        <div style={styles.LeftBorder}>
          <Link to="/me" style={styles.button}>
            click here!
          </Link>
        </div>
        <h3>&#125;</h3>
      </div>
    </div>
  );
}

export default AddProject;
