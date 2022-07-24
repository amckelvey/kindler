import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import Developers from "./pages/Developers";
import LandingPage from "./pages/LandingPage";
import DevRecSignup from "./pages/DevOrRecSignup";
import DevRecLogin from "./pages/DevOrRecLogin";
import SignUpDev from "./pages/SignUpDev";
import SignUpRec from "./pages/SignUpRec";
import SignUpDevProject from "./pages/SignUpDevProfile";
import DevLogin from "./pages/DevLogin";
import RecLogin from "./pages/RecLogin";

import Auth from './utils/auth'


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const styles = {
  LogoBracket: {
    color: "#179FF6",
    fontSize: "65px",
    fontWeight: "300",
  },
  name: {
    color: "#9CDCFB",
    margin: "0.1em 0 0 0.5em",
    fontSize: "50px",
    fontWeight: "300",
    letterSpacing: "15px",
  },

  pageWrap: {
    paddingBottom: "2.5rem",
  },
};

function App() {
  if (!Auth.loggedIn()) {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div style={styles.pageWrap}>
            <h1 style={styles.name}>
              <span style={styles.LogoBracket}>[</span> KINDLER{" "}
              <span style={styles.LogoBracket}>]</span>
            </h1>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/logintype" element={<DevRecLogin />} /> */}
              <Route path="/logindev" element={<DevLogin />} />
              <Route path="/loginrec" element={<RecLogin />} />
              <Route path="/signupdev" element={<SignUpDev />} />
              <Route path="/signuprec" element={<SignUpRec />} />
              <Route path="/signuptype" element={<DevRecSignup />} />
              <Route path="/logintype" element={<DevRecLogin />} />

              <Route path="/*" element={<LandingPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    )
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div style={styles.pageWrap}>
            <h1 style={styles.name}>
              <span style={styles.LogoBracket}>[</span> KINDLER{" "}
              <span style={styles.LogoBracket}>]</span>
            </h1>
            <Routes>
              {/* <Route path="/logintype" element={<DevRecLogin />} /> */}
              <Route path="/developers" element={<Developers />} />
              <Route
                path="/:developerId/projects"
                element={<SignUpDevProject />}
              />
              <Route path="/*" element={<Developers />} />
              {/* <Route path="/signup-dev-profile" element={<SignUpDevProfile />} />
              <Route path="/developers" element={<SignUpDevProfile />} />
              <Route */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
