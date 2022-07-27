import React from "react";
import Auth from "../../utils/auth";

const LogoutBtn = () => {
  const styles = {
    button: {
      color: "#CE9178",
      fontSize: "16px",
      letterSpacing: "2.5px",
      border: "none",
      backgroundColor: "transparent",
      width: "120px",
      height: "30px",
      fontWeight: "bolder",
    },
  };
  return (
    <button style={styles.button} onClick={() => Auth.logout()}>
      'logout'
    </button>
  );
};
export default LogoutBtn;
