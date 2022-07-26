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
    letterSpacing: "3px",
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
    padding: "2px 10px",
    margin: "10px 0",
    fontFamily: "Source Code Pro, monospace",
  },

  inputDiv: {
    paddingBottom: "5px",
    paddingLeft: "20px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
  },

  formstyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
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
    fontFamily: "Source Code Pro, monospace",
  },

  backLink: {
    paddingLeft: "20px",
    color: "#9CDCFB",
  }
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
          <p style={styles.colorOra}>
            'sign up'<span style={styles.semiColon}>&#59;</span>
          </p>
          <div className="container" style={styles.container}>
            <p style={styles.textColor}>// create new developer account //</p>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleFormSubmit} style={styles.formstyle}>
            <input
              style={styles.input}
              placeholder="name"
              name="name"
              type="name"
              id="name"
              onChange={handleChange}
            />
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
              id="password"
              onChange={handleChange}
            />
          <div style={{display: "flex", justifyContent: "center" }}>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </div>
        </form>
        <br />
        <div className="container my-1">
          <Link to="/logindev" style={styles.backLink}>
            ← Already Signed Up?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpDev;
