import React from "react";
import "./footer.css";
export default function Footer() {
  const styles = {
    footerContainer: {
      width: "98%",
      height: "2.5rem",
      display: "inline-block",
      fontFamily: "Source Code Pro, monospace",
      letterSpacing: "2.5px",
      borderTop: "1px solid #B6B4B4",
      justifyContent: "left",
      marginTop: "100px",
      marginBottom: "100px",
      
      paddingLeft: "3vw",
      padding: "20px"
      

    },

    listInlineItem: {
    display: "inline-block"


    },

    h5: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "15px",
      color: "#9CDCFB",
      padding: "0",
    },

    col: {
      width: "30vw",
      height: "auto",
      float: "left",
      boxSizing: "border-box",
      padding: "2vw",
      margin: "1vw",
    },

    ul: {
      listStyleType: "row",
      margin: "0",
      paddingLeft: "10px",
      borderLeft: "1px solid #686868",
    },

    a: {
      color: "#CE9178",
  
    
    },

    whtSemiColon: {
      color: "#FFFFFF",
    },

    curlyBrackYellow: {
      color: "#F2D700",
    },
    LeftBorder: {
      borderLeft: "solid 1px #7B7B7B",
      padding: "0",
      margin: "5px 1em",
      color: "white",
    },
  };

  return (
  
    <div className="footer" style={styles.footerContainer}>
      <div className="footer" style={styles.LeftBorder}>
        <h5 style={styles.h5}>
              {" "}
              <span style={styles.curlyBrackYellow}>&#123;</span>'KINDLER 2022'
              <span style={styles.curlyBrackYellow}>&#125;</span>{" "}
              <span style={styles.whtSemiColon}>;</span>{" "}
            </h5>
       <div className="footer" style={styles.LeftBorder}>
        <h5 style={styles.h5}>
          {" "}
          <span style={styles.curlyBrackYellow}>&#123;</span>'CREATOR'
          <span style={styles.curlyBrackYellow}>&#125;</span>{" "}
          <span style={styles.whtSemiColon}>;</span>{" "}
        </h5>
        <ul className="list-inline" style={styles.ul}>
        <span style={styles.curlyBrackYellow}>[</span>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/Lunirs">
              Dan
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/lyf703331869">
              Yafei
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/amckelvey">
              Andrew
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/shayosullivan">
              Shay
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/saukchung">
              Brian
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <li className="list-inline-item" style={styles.listInlineItem}>
            <a style={styles.a} href="https://github.com/taa2153">
              Tasha
            </a>
            <span style={styles.whtSemiColon}>,</span>
          </li>
          <span style={styles.curlyBrackYellow}>]</span>
        </ul>
      </div>
    </div>
    </div>
  );
}
