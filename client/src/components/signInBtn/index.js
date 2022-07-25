import React from "react";
import { Link } from "react-router-dom";

const SignInBtn = () => {
  const styles = {
    whtSemiColon: {
      color: "#FFFFFF",
      fontWeight: "bolder",
    },
    button: {
      color: "#CE9178",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "2.5vw",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      width: "24vw",
      height: "10vh",
    },
    link: {
      textDecoration: "none",
      color: "#CE9178",
    },
  };
  return (
    <button style={styles.button}>
      <Link style={styles.link} to="/logintype">
        'sign in' <span style={styles.whtSemiColon}>;</span>
      </Link>
    </button>
  );
};

export default SignInBtn;
