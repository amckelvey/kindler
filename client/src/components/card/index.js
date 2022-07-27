import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ContactBtn from "../cardBtn/contactBtnIndex";
import ProjectBtn from "../cardBtn/projectBtnIndex";

function Card({ imagen, name, position, job_status, bio, email, _id, i }) {
  const styles = {
    card: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      backgroundColor: "#333333",
      width: "14rem",
      height: "24rem",
      padding: "0 1.5rem 1.5rem 1.5rem",
      borderRadius: "10px",
    },

    img: {
      width: "25%",
      borderRadius: "20px",
      position: "absolute",
      top: "-8%",
      right: "5%",
    },

    h2: {
      marginTop: "10%",
      marginBottom: "10%",
      color: "#9CDCFB",
    },

    p: {
      margin: "0",
      color: "#CE9178",
      borderLeft: "solid 2px #7B7B7B",
      padding: "0 5px",
      overflowWrap: "break-word",
    },

    btnn1: {
      width: "10%",
      display: "flex",
      position: "absolute",
      bottom: "8%",
      left: "8%",
    },
    btnn2: {
      width: "10%",
      display: "flex",
      position: "absolute",
      bottom: "8%",
      right: "35%",
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
    title: {
      color: "#9CDCFB",
    },
    bio: {
      color: "#F2D700",
    },
    purple: {
      color: "#C586C0",
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
        <p style={styles.p}>
          <span style={styles.title}>Position:</span> {position}
          <p style={styles.p}>
            <span style={styles.title}>Job Status:</span> {job_status}
            <p style={styles.p}>
              <p style={styles.bio}>{bio}</p>
              <div id={_id} style={styles.contact}>
                <span style={styles.purple}>if </span>
                <span style={styles.bio}>&#40;</span>
                <span style={styles.title}>contact</span>
                <span style={styles.bio}>&#41; &#123;</span>
                <br></br>
                <span style={styles.purple}>return </span>
                <span style={styles.title}>{email}</span>
                <br></br>
                <span style={styles.bio}>&#125;</span>
              </div>
            </p>
          </p>
        </p>
        <div>
          <div style={styles.btnn1}>
            <ContactBtn text="Contact" id={_id} />
          </div>
          <div style={styles.btnn2}>
            <ProjectBtn text="Project" id={i} />
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
