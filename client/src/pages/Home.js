import React from "react";
import SignUpBtn from '../components/signUpBtn'
import SignInBtn from '../components/signInBtn'
import Auth from "../utils/auth";

const styles = {
    container: {
        borderLeft: "solid 2px #7B7B7B",
        padding: "0 1em",
        margin: "10px 2em"
    }
  }

const Home = () => {
    if (!Auth.loggedIn()) {
        return (
            <div>
                <div className="container" style={styles.container}>
                    <h2>&#123; #COMMIT TO YOUR RIGHT DEVELOPER &#125;</h2>
                </div>
                    <SignUpBtn />
                    <SignInBtn />
            </div>
        );
    } 
};

export default Home;