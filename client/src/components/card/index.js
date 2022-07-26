import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ContactBtn from "../cardBtn/contactBtnIndex";
import ProjectBtn from "../cardBtn/projectBtnIndex";

function Card({ imagen, name, position, job_status, bio, email, _id, i }) {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#333333",
      width: "12rem",
      height: "24rem",
      padding: "0 2rem 2rem 2rem",
      borderRadius: "10px",
    },

    img: {
      marginTop: "-10%",
      width: "20%",
      borderRadius: "20px",
    },

    h2: {
      margin: "0",
      marginTop: "1rem",
      color: "#9CDCFB",
    },

    p: {
      margin: "0",
      color: "#CE9178",
    },

    btnn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    contact: {
      display: "none",
      backgroundColor: "#333333",
      color: "#CE9178",
    },

    container: {
      margin: "2em auto",
    },
    empty: {
      minHeight: "200px",
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
        <img style={styles.img} src={imagen} alt="default profile pic" />
        <h2 style={styles.h2}>{name}</h2>
        <p style={styles.p}>Position: {position}</p>
        <p style={styles.p}>Job Status: {job_status}</p>
        <p style={styles.p}>{bio}</p>
        <div style={styles.btnn}>
          <ContactBtn text="Contact" id={_id} />
          <ProjectBtn text="Project" id={i} />
        </div>
        <div id={_id} style={styles.contact}>
          <br></br>
          Contact email: {email}
        </div>
      </div>
    </animated.div>
    
  );
}

export default Card;
