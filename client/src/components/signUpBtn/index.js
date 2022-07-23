import React from "react";
import { Link } from "react-router-dom";
const SignUpBtn = () => {
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
  };
  return (
    <button style={styles.button}>
      <Link to="/signupdev">
        'sign up' <span style={styles.whtSemiColon}>;</span>
      </Link>
    </button>
  );
};

export default SignUpBtn;
