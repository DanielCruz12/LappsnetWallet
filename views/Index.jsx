import React from "react";
import { Helmet } from "react-helmet";
import Head from "./Head";
import logo from "../src/assets/logo.png";

const Index = () => {
  return (
    <>
      <Head></Head>
      <Helmet>
        <title>Lappsnet wallet</title>
        <link rel="stylesheet" href="https://stackedit.io/style.css" />
      </Helmet>

      <div id="pageContent">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 align-self-center">
              <div id="logoContainer">
                <img src={logo} alt="logo" />
              </div>
              <h1 id="signInTitle">Lappsnet Wallet</h1>
              <p>
                Welcome to Lappsnet Wallet, your wallet for the Lappsnet
                network.
              </p>
              <a href="/auth" style={{ color: "white" }}>
                <p class="btn btn-success">Try the wallet</p>
              </a>
              <h4>What is Lappsnet?</h4>
              <p>
                Lappsnet is an experimental smart contract network that can
                easily be used by lightning network users. You can purchase and
                redeem ESAT tokens from{" "}
                <a href="https://web.lappsnet.io">the project website</a>.
              </p>
              <h4>How does the wallet work?</h4>
              <p>
                The wallet generates a key, which is encrypted using a security
                device, such as your screen lock. The encrypted key is stored in
                the browser, and you can authenticate with our servers to
                decrypt the key, or recover from a password-protected backup.
              </p>
              <h4>Are there any requirements?</h4>
              <p>You will need one of the following browsers:</p>
              <ul>
                <li>Chrome 67+, Firefox 60+, Safari 13+, Edge 18+</li>
                <li>(Android) Chrome latest</li>
                <li>(iOS) Safari 14.4+, Firefox latest, Chrome latest</li>
              </ul>
              <p class="mt-4 text-center">
                <a href="/docs">
                  <strong class="navBtn">Documentation</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
