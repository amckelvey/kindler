import React from 'react';
import './footer.css'
export default function Footer() {
    const styles = {
        footerContainer: {
            width: "100%",
            height: "2.5rem",
            display: "flex",
            fontFamily: "Source Code Pro, monospace",
            letterSpacing: "2.5px",
            borderTop: "3px solid #B6B4B4",
            justifyContent: "left",
            marginTop: "200px",
            paddingLeft: "3vw"
    
        },
    
        listInlineItem: {
            display: "flex",
            flexDirection: "row",
            alignContent: "left",
            flexGrow: "1",
            color: "#CE9178",
            border: "1px solid #FFFFFF",
            borderRadius: "18px",
            fontSize: "15px",
            letterSpacing: "2.5px",
            backgroundColor: "transparent",
            width: "22vw",
            height: "3.5vh",
            fontFamily: "Source Code Pro, monospace",
            paddingLeft: "10px",
            padding: "1.5vh",
            margin: "1vw",
            justifyContent:"center"
            
        },
    
        h5: {
            fontFamily: "Source Code Pro, monospace", 
            fontSize: "15px",
            color: "#9CDCFB",
            padding: "0",
        },
    
        col:{
            width: "30vw",
            height: "auto",
            float: "left",
            boxSizing: "border-box",
            padding: "2vw",
            margin:"1vw"
    
        },
    
        ul:{
            listStyleType: "none",
            margin: "0",
            paddingLeft: "10px",
            borderLeft: "1px solid #686868",
    
        },
    
        a:{
            color: "#CE9178",
        },
    
        whtSemiColon: {
            color: "#FFFFFF",
          },
    
        curlyBrackYellow:{
            color: "#F2D700", 
        }
    }

    return (
        <div className='footer' style={styles.footerContainer}>
        <div className= 'col'style={styles.col}>
            <h5 style={styles.h5}> <span style={styles.curlyBrackYellow}>&#123;</span>'KINDLER 2022'<span style={styles.curlyBrackYellow}>&#125;</span> <span style={styles.whtSemiColon}>;</span> </h5>
            <ul className='list-inline' style={styles.ul}>
                <li className='list-inline-item' style={styles.listInlineItem}>About <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}>Mission<span style={styles.whtSemiColon}>;</span> </li>
                <li className='list-inline-item' style={styles.listInlineItem}>Services <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}>Media<span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}>Contact <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}>Github<span style={styles.whtSemiColon}>;</span></li>
            </ul>
        </div>
    
        <div className= 'col' style={styles.col}>
            <h5 style={styles.h5}> <span style={styles.curlyBrackYellow}>&#123;</span>'CREATOR'<span style={styles.curlyBrackYellow}>&#125;</span> <span style={styles.whtSemiColon}>;</span> </h5>
            <ul className='list-inline' style={styles.ul}>
                <li className='list-inline-item' style={styles.listInlineItem}><a  style={styles.a} href='https://github.com/Lunirs' >Daniel Hong </a> <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/lyf703331869' >Yafei Liu </a> <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/amckelvey' >Andrew Mckelvey </a> <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/shayosullivan' >Shay O'Sullivan</a> <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/saukchung' >Brian Sa Uk Chung</a> <span style={styles.whtSemiColon}>;</span></li>
                <li className='list-inline-item' style={styles.listInlineItem}><a style={styles.a} href='https://github.com/taa2153'>Tasha Akemah</a><span style={styles.whtSemiColon}>;</span></li>
            </ul>
        </div>
    
        </ div>
    )
}




