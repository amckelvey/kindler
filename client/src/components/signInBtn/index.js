import React from "react";

const SignInBtn = () => {
  const styles = {
    whtSemiColon: {
      color: "#FFFFFF",
      fontWeight: "bolder"
    },
    button: {
      color: "#CE9178",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "2.5vw",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      width: "24vw",
      height: "10vh"
    }
  }
  return (
    <button style={styles.button} onClick={() => alert("signing up")}>'sign in' <span style={styles.whtSemiColon}>;</span></button>
  );
};

export default SignInBtn;