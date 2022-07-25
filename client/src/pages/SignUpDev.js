import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_DEV } from "../utils/mutations";

const styles = {
  container: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
  },

  slogan: {
    color: "#9CDCFB",
    fontSize: "25px",
    fontWeight: "300",
    letterSpacing: "3px",
  },

  brackets: {
    color: "#F2D700",
  },

  h2: {
    color: "#CE9178",
  },
};

function SignUpDev(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addDev] = useMutation(ADD_DEV);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDev({
      variables: {
        name: formState.name,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addDev.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="container" style={styles.container}>
        <div>
          <h2 style={styles.slogan}>
            <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
            DEVELOPER <span style={styles.brackets}>&#125;</span>
          </h2>
        </div>
        <div className="container" style={styles.container}>
          <h2 style={styles.h2}>'sign up'</h2>
          <div className="container" style={styles.container}>
            <form onSubmit={handleFormSubmit}>
              <div className="flex-row space-between my-2">
                <label htmlFor="name">Name:</label>
                <input
                  placeholder="Name"
                  name="name"
                  type="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="password">Password:</label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row flex-end">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpDev;
