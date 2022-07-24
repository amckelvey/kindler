import React from "react";
import Auth from "../../utils/auth";

const LogoutBtn = () => {
  const styles = {
    whtSemiColon: {
      color: "#FFFFFF",
      fontWeight: "bolder",
    },
    button: {
      color: "#CE9178",
      border: "2px solid #FFFFFF",
      borderRadius: "30px",
      fontSize: "20px",
      letterSpacing: "2.5px",
      backgroundColor: "transparent",
      width: "20vw",
      height: "4vh",
    },
  };
  return (
    <button style={styles.button} onClick={() => Auth.logout()}>
      'logout' <span style={styles.whtSemiColon}>;</span>
    </button>
  );
};
export default LogoutBtn;
