import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REC_LOGIN } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const styles = {
  container: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
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

  h2: {
    color: "#CE9178",
    fontFamily: "Source Code Pro, monospace",
  },

  textColor: {
    color: "#649955",
    fontSize: "3vw"
  },

  semiColon: {
    color: "white",
  },

  input: {
    width: "80vw",
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    borderRadius: "30px",
    fontSize: "15px",
    letterSpacing: "2.5px",
    backgroundColor: "transparent",
    textDecoration: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "block"
  },

  inputDiv: {
    paddingBottom: "5px",
    paddingLeft: "20px",
    display: "flex",
    justifyContent: "center"
  },

  buttonDiv: {
    paddingLeft: "20px",
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
    flex: "1"
  },
  
  p: {
    color: "#FFFFFF",
  },

  backLink: {
    paddingLeft: "20px",
    color: "#9CDCFB",
  }
};

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(REC_LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.recLogin.token;
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
      <div className="container" style={styles.container}>
        <div>
          <h2 style={styles.slogan}>
            <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
            DEVELOPER <span style={styles.brackets}>&#125;</span>
          </h2>
        </div>
        <div className="container" style={styles.container}>
          <h2 style={styles.h2}>
            'sign in'<span style={styles.semiColon}>&#59;</span>
          </h2>
          <div className="container" style={styles.container}>
            <h2 style={styles.textColor}>
              // sign-in to your recruiter account //
            </h2>
          </div>
        </div>
      </div>
      <br />
      <div style={styles.inputDiv}>
        <form onSubmit={handleFormSubmit}>
          <input
            style={styles.input}
            placeholder="email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          <div style={{display: "flex", flexDirection: "column"}}>
            {error ? <p style={styles.p}>The login information is not correct</p> : null}
            <button type="submit" style={styles.button}>Submit</button>
          </div>
        </form>
      </div>
      <br />
      <div className="container my-1" >
        <Link to="/signuprec" style={styles.backLink}>← Haven't Signed Up Yet?</Link>
      </div>
    </div>
  );
}

export default Login;
