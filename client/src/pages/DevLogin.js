import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DEV_LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const styles = {
    LeftBorder: {
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 1em",
      margin: "10px 2em",
    },
  };

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(DEV_LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
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
    <div>
      <div className="sloganContainer" style={styles.LeftBorder}>
        <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
        <div style={styles.LeftBorder}>
          <h3>
            'sign in'<span>;</span>
          </h3>
        </div>
      </div>
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="email"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
        {error ? <p>The login information is not correct</p> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
