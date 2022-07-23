import React from 'react';
import './navMain.css'
import { Link } from "react-router-dom";

export default function Header() {
    
    return (
        <nav>
            <div>
                <button className='logo navbutton' onClick={() => alert("this is our home")}>[ &nbsp;]</button>
            </div>
            <div>
                <button className='navbutton' onClick={() => alert("This is our website")}>Learn</button>
            </div>
            <div>
                <button className='navbutton' onClick={() => alert("Stay safe")}>Safety</button>
            </div>
            <div>
                <button className='navbutton' onClick={() => alert("Need help? Me too!!")}>Support</button>
            </div>
        </nav>
    )
}