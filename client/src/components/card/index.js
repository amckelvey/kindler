import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../cardBtn/index";

function Card({ imagen, name, position, job_status, bio }) {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#333333",
      width: "25rem",
      height: "fit-content",
      padding: "0 2rem 2rem 2rem",
      borderRadius: "10px",
    },

    img: {
      marginTop: "-10%",
      width: "100%",
      borderRadius: "20px",
    },

    h2: {
      margin: "0",
      marginTop: "1rem",
      color: "#9CDCFB",
    },

    p: {
      margin: "0",
      marginTop: "0.5rem",
      marginBottom: "1.5rem",
      color: "#CE9178",
    },

    btnn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.1)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div style={styles.card}>
        <img style={styles.img} src={imagen} alt="" />
        <h2 style={styles.h2}>
          {name}, {position}, {job_status}
        </h2>
        <p style={styles.p}>{bio}</p>
        <div style={styles.btnn}>
          <Button text="Contact" />
          <Button text="Project" />
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
