import React from 'react';
import './navMain.css'

export default function Header() {
    return (
        <nav>
            <div>
                <button className='logo' onClick={() => alert("this is our home")}>[ &nbsp;]</button>
            </div>
            <div>
                <button onClick={() => alert("This is our website")}>Learn</button>
            </div>
            <div>
                <button onClick={() => alert("Stay safe")}>Safety</button>
            </div>
            <div>
                <button onClick={() => alert("Need help? Me too!!")}>Support</button>
            </div>
        </nav>
    )
}