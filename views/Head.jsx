import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.js";
import "jquery";
import Web3 from "web3";
import Buffer from "buffer";
import crypto from "crypto-js";
//BigNumber
//cbor
//import { IconifyIconSize } from '@iconify/react';

import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <div>
      <Helmet>
        <script
          src="https://unpkg.com/cbor-web"
          integrity="sha256-iey8EY2WTC5Eu4oCNnxnQwmhpWYwbYn9o4gpoyhpgE0="
          crossorigin="anonymous"
        ></script>
        <script src="https://unpkg.com/@simplewebauthn/browser"></script>
        <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
        <link rel="stylesheet" src="../src/styles/App.css" />
        <link
          rel="icon"
          href="../src/assets/favicon.ico"
          type="image/vnd.microsoft.icon"
        />
      </Helmet>
    </div>
  );
};

export default Head;
