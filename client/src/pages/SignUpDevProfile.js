import React, { useState } from "react";
import { ADD_DEVELOPER_DATA } from "../utils/mutations";
import { useMutation } from "@apollo/client";

function SignUpDevProject() {
  const [formState, setFormState] = useState({
    name: "",
    jobStatus: "",
    position: "",
    bio: "",
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

  return (
    <div className="sloganContainer" style={styles.LeftBorder}>
      <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
      <div style={styles.LeftBorder}>
        <h3>// SET UP YOUR PROFILE //</h3>
        <div style={styles.LeftBorder}>
          <h3>
            const <span>myProfile &#40;</span>&#123;
          </h3>
          <div style={styles.LeftBorder}>
            <form onSubmit={formSubmitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">name: </label>
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
                <label htmlFor="statusInput">status: </label>
                <input
                  type="text"
                  name="jobStatus"
                  className="form-control"
                  id="statusInput"
                  value={formState.jobStatus}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="positionInput">position: </label>
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  id="positionInput"
                  value={formState.position}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bioInput">bio: </label>
                <textarea
                  className="form-control"
                  id="bioInput"
                  name="bio"
                  value={formState.bio}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="imgInput">profileImage: </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="imgInput"
                />
              </div> */}
              <p>add a project</p>

              <button type="submit" style={styles.button}>
                click here
              </button>
            </form>
          </div>
          <h3> &#125;&#41;;</h3>
        </div>
      </div>
    </div>
  );
}

export default SignUpDevProject;
