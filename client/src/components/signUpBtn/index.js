import React from "react";
import { Link } from "react-router-dom";

const SignUpBtn = () => {
  const styles = {
    whtSemiColon: {
      color: "#FFFFFF",
     
    },
    button: {
      color: "#CE9178",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "2.5vw",
      backgroundColor: "transparent",
      width: "24vw",
      height: "10vh",
      fontFamily: "Source Code Pro, monospace",
      letterSpacing: "2.5px",
      
    },
    link: {
      textDecoration: "none",
      color: "#CE9178",
    },
  };
  return (
    <button style={styles.button}>
      <Link style={styles.link} to="/signuptype">
        'sign up' <span style={styles.whtSemiColon}>;</span>
      </Link>
    </button>
  );
};

export default SignUpBtn;
