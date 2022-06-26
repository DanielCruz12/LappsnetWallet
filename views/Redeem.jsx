import React from "react";
import { Helmet } from "react-helmet";
import Head from "./Head";
import $ from "jquery";
import logo from "../src/assets/logo.png";

const Redeem = () => {
  return (
    <>
      <Head></Head>
      <div className="hidden">
        <div id="pageContent">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 align-self-center">
                <div
                  className="alert alert-success"
                  role="alert"
                  id="successBanner"
                >
                  <strong>Success!</strong>
                  <p id="successMessage"></p>
                </div>
                <div
                  className="alert alert-warning"
                  role="alert"
                  id="warningBanner"
                >
                  <strong>Warning!</strong>
                  <p id="warningMessage"></p>
                </div>
                <div
                  className="alert alert-danger"
                  role="alert"
                  id="errorBanner"
                >
                  <strong>Error!</strong>. <span id="errorText"></span>
                </div>
                <div id="logoContainer">
                  <img src={logo} alt="logo" />
                </div>
                <h2 id="signInTitle">Redeem ESATs</h2>
                <p className="mt-2 text-center">
                  Withdraw to Lightning Network
                </p>

                {/* If not currently logged into Lappsnet, javascript redirect to /auth */}

                {/* If Lappsnet account detected */}
                <div id="redeemDiv">
                  <ul>
                    <h5 className="ml-2">
                      Welcome,{" "}
                      <code className="usernameDisplay" id="userName-1"></code>
                    </h5>
                    <h3 className="text-center border rounded-pill" id="esats">
                      <span id="esatBalance"></span> ESAT
                    </h3>
                    <p className="text-center">
                      <code className="addressDisplay" id="address-1"></code>
                    </p>
                    <li className="btn btn-success m-1 redeemEsatsButton">
                      <span>Redeem ESATs</span>
                    </li>
                    <br></br>
                    <p className="mt-1">
                      A 2% withdrawal fee will be charged. <br></br> Minimum
                      withdrawal: 100 sats (102 ESAT).
                    </p>
                  </ul>
                  <p className="mt-4 text-center">
                    <a href="/auth">
                      <strong className="navBtn">Back to wallet</strong>
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

                {/* Redeem modal */}
                <div className="modal" id="redeemModal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Redeem ESATs</h5>
                      </div>
                      <div className="modal-body">
                        <form>
                          <fieldset>
                            <legend className="mb-3">
                              Provide an invoice to redeem sats.
                            </legend>
                            <div className="form-group row formRow">
                              <div className="col-sm-4">
                                <label for="redeemInvoice">Invoice</label>
                              </div>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="redeemInvoice"
                                ></input>
                              </div>
                            </div>
                            <div className="form-group row formRow">
                              <div className="col-sm-4">
                                <label for="sendEsatAmt">ESATs to send:</label>
                              </div>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="sendEsatAmt"
                                  disabled
                                ></input>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="redeemBtn"
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                            id="redeemSpinner"
                          ></span>
                          Redeem satoshis
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary cancelRedemption"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="/js/refactor/redeem/index.js"></script>
        <script src="/js/refactor/redeem/utils/base64.min.js"></script>
        <script src="/js/refactor/redeem/utils/esatBalance.js"></script>
        <script src="/js/refactor/redeem/utils/fido.js"></script>
        <script src="/js/refactor/redeem/utils/parseInvoice.js"></script>
        <script src="/js/refactor/redeem/utils/requestSats.js"></script>
      </Helmet>

      <script>
        {
          (window.onload = function (e) {
            $("body").removeclassName("hidden");
          })
        }
      </script>
    </>
  );
};

export default Redeem;
