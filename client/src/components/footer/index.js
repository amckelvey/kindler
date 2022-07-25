import React from 'react';
import './footer.css'
export default function Footer() {
    return (
        <div className='footer' style={styles.footerContainer}>
            <span>© 2022 Kindler, Inc.</span>
            <ul className='list-inline' style={styles.footerLinksCont}>
                <li className='list-inline-item'><a href='https://github.com/Lunirs' >Dan</a></li>
                <li className='list-inline-item'><a href='https://github.com/lyf703331869' >Yafei Liu</a></li>
                <li className='list-inline-item'><a href='https://github.com/amckelvey' >Andrew</a></li>
                <li className='list-inline-item'><a href='https://github.com/shayosullivan' >Shay O'Sullivan</a></li>
                <li className='list-inline-item'><a href='https://github.com/saukchung' >Brian</a></li>
                <li className='list-inline-item'><a href='https://github.com/taa2153'>Tahsa</a></li>
            </ul>
        </ div>
    )
}