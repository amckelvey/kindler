import React from 'react';
export default function Footer() {

    const styles = {
        footerContainer: {
            position: "absolute",
            bottom: "2rem",
            width: "100%",
            height: "2.5rem",
            display: "flex",
        },

        footerLinksCont: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            flexGrow: "1"
        }
    }
    return (
        <div className='footer' style={styles.footerContainer}>
            <span>© 2022 Kindler, Inc.</span>
            <ul className='list-inline' style={styles.footerLinksCont}>
                <li className='list-inline-item'><a href='https://github.com/Lunirs' >Dan </a></li>
                <li className='list-inline-item'><a href='https://github.com/lyf703331869' >Yafei Liu</a></li>
                <li className='list-inline-item'><a href='https://github.com/amckelvey' >Andrew</a></li>
                <li className='list-inline-item'><a href='https://github.com/shayosullivan' >Shay O'Sullivan</a></li>
                <li className='list-inline-item'><a href='https://github.com/saukchung' >Brian</a></li>
                <li className='list-inline-item'><a href='https://github.com/'>Tahsa</a></li>
            </ul>
        </ div>
    )
}