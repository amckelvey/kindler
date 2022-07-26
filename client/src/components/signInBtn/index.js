import React from "react";
import { Link } from "react-router-dom";

const SignInBtn = () => {
  const styles = {
    whtSemiColon: {
      color: "#FFFFFF",
    },
    button: {
      color: "#CE9178",
      border: "1px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "3vw",
      backgroundColor: "transparent",
      width: "28vw",
      height: "12vh",
      fontFamily: "Source Code Pro, monospace",
      letterSpacing: "2.5px",
      marginTop: "8vh"
    },
    link: {
      textDecoration: "none",
      color: "#CE9178",
    },
  };
  return (
    <button style={styles.button}>
      <Link style={styles.link} to="/logintype">
        'signIn'<span style={styles.whtSemiColon}>;</span>
      </Link>
    </button>
  );
};

export default SignInBtn;
