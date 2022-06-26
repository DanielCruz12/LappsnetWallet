import React from "react";
import { Icon } from '@iconify/react';

const ConnectLoginDetected = () => {
  return (
    <div>
      <div id="connectLoginDetected">
        <ul>
          <h5 className="ml-2">
            Welcome, <code className="usernameDisplay" id="userName-1"></code>
          </h5>
          <h3 className="text-center border rounded-pill" id="esats">
            <span id="esatBalance"></span> ESAT
          </h3>
          <p className="text-center">
            <code className="addressDisplay" id="address-1"></code>{" "}
            <Icon icon="mdi-light:home" />

          </p>
          <div id="tokenBalances" className="m-1">
            <p
              data-toggle="collapse"
              data-target="#collapseTokenList"
              aria-expanded="false"
              aria-controls="collapseTokenList"
            >
              <span id="tokenCount"></span> other tokens{" "}
              <span className="iconify" data-icon="akar-icons:chevron-down"></span>
            </p>
            <div className="collapse" id="collapseTokenList"></div>
          </div>
          <li className="btn btn-success m-1 createTxTopBtn">
            <span>Create transaction</span>
          </li>
          <br></br>
          <li className="btn btn-primary m-1 contractCallTopBtn">
            <span>Make contract call</span>
          </li>
          <br></br>
          <li className="btn btn-secondary m-1 signOut">Sign out</li>
        </ul>
        <p className="m-1">
          Want peace of mind?{" "}
          <strong className="backUpAccount strongBtn">Back up account</strong>
        </p>
        <p className="m-1">
          Need ESAT?{" "}
          <a href="https://web.lappsnet.io/" target="_blank" rel="noreferrer">
            <strong className="strongBtn">Get more</strong>
          </a>
        </p>
        <p className="mt-4 text-center">
          <a href="/redeem">
            <strong className="navBtn">Withdraw to LN</strong>
          </a>
        </p>
        <p className="mt-4 text-center">
          <a href="/">
            <strong className="navBtn">About</strong>
          </a>
        </p>
        <p className="mt-4 text-center">
          <a href="/docs">
            <strong className="navBtn">Documentation</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConnectLoginDetected;
