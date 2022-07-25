import React, { useState } from "react";
import { ADD_DEVELOPER_DATA } from "../utils/mutations";
import { QUERY_ME_DEV, QUERY_SINGLE_DEVELOPER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { Navigate, Link, useParams } from "react-router-dom";

function SignUpDevProfile() {
  const { _id: userParam } = useParams();
  const { loading, data } = useQuery(
    userParam ? QUERY_SINGLE_DEVELOPER : QUERY_ME_DEV,
    { variables: { _id: userParam } }
  );

  const dev = data?.meDev || data?.developer || {};

  const link = `/${dev._id}/addproject`;

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
      marginTop: "10px",
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
      document.location.assign("/me");
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
                <label htmlFor="positionInput">position: </label>
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
                <label htmlFor="bioInput">bio: </label>
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
          <span>const</span> addProject &#123;
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
