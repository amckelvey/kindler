import React, { useState } from "react";


const FORM_ENDPOINT = ""; 

const styles = {
  LeftBorder: {
    borderLeft: "solid 2px #7B7B7B",
    padding: "0 1em",
    margin: "10px 2em",
    color: "white",
  },
  button: {
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    borderRadius: "30px",
    fontSize: "15px",
    letterSpacing: "2.5px",
    backgroundColor: "transparent",
    textDecoration: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "10px",
    fontFamily: "Source Code Pro, monospace",
  },
  card: {
    maxWidth: "400px",
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    borderRadius: "30px",
    fontSize: "15px",
    letterSpacing: "2.5px",
    backgroundColor: "transparent",
    textDecoration: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "5px",
    fontFamily: "Source Code Pro, monospace",
  },
  textColor: {
    color: "#649955",
  },

  brackets: {
    color: "#F2D700",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  colorOra: {
    color: "#CE9178",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  colorYellow: {
    color: "#F2D700",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  colorLightBlue: {
    color: "#9CDCFB",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },
  colorBlue: {
    color: "#179FF6",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  colorPurple: {
    color: "#C586C0",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  colorGreen: {
    color: "#649955",
    fontFamily: "Source Code Pro, monospace",
    fontWeight: "lighter"
  },

  slogan: {
    color: "#9CDCFB",
    fontSize: "25px",
    fontWeight: "300",
    letterSpacing: "3px",
    fontFamily: "Source Code Pro, monospace",
  },

  whtSemiColon: {
    color: "#FFFFFF",
    fontWeight: "lighter",
    fontFamily: "Source Code Pro, monospace",
  },
};

const Support = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
  <div className="sloganContainer" style={styles.LeftBorder}>
    <h2 style={styles.slogan}>
       <span style={styles.brackets}>&#123;</span> #COMMIT TO YOUR RIGHT
       DEVELOPER <span style={styles.brackets}>&#125;</span>
     </h2>
    <form style={styles.LeftBorder}
      onSubmit={handleSubmit}
     >
      <div className="mb-3 pt-0">
      <h4 style={styles.colorGreen}> /your name:/ </h4>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <h4 style={styles.colorGreen}> /email:/ </h4>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
      <h4 style={styles.colorGreen}> /message:/ </h4>
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button  style={styles.button}
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  </div>
  );
};

export default Support;