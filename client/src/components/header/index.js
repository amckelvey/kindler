import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import Auth from "../../utils/auth";
import "./header.css";

export default function Header() {
  return (
    <div className= "navigation">
    <input type="checkbox" id="nav-check"></input>
      <div className= "nav-header">
          <Link to="/">
            <button class="icon">[&nbsp;]</button>
          </Link>
        </div>

        <div class= "nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="navbar" >
            <div className="navbar">
              <button className="navbarbutton"
                onClick={() => alert("This is our website")}>
                 Learn<span class="whitesemi">;</span>
              </button>
            </div>
            <div className="navbar">
              <button class="navbarbutton" onClick={() => alert("Stay safe")}>
                Safety<span class="whitesemi">;</span>
              </button>
            </div>
            <div className="navbar">
              <button class="navbarbutton"
                
                onClick={() => alert("Need help? Me too!!")}
              >
                Support<span class="whitesemi">;</span>
              </button>
            </div>
       
    
    </div>

    {Auth.loggedIn() ? (
              <>
                <div>
                  <Link to="/me">
                    <button class="profilebutton">'profile'<span class="whitesemiprofile">;</span></button>
                  </Link>
                </div>

                <div className="logoutbutton">
                  <LogoutBtn />
                </div>
              </>
            ) : (
              <></>
            )}
    </div>
    
  );
}


