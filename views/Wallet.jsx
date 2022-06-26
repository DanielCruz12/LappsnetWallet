import React from "react";
import { Helmet } from "react-helmet";
import Head from "./Head";
import Scripts from "./Scripts";
import $ from 'jquery';

import {
  AccountRegistrationForm,
  BackupModal,
  ConfirmContractCallModal,
  ConnectLoginDetected,
  ConnectLoginNotDetected,
  ContinueWithAccountConfirmation,
  ContractCallModal,
  /*CreateTxModal,*/ 
  LogoutModal,
  RecoverModal,
  SignMessageModal,
  SignTxModal,
  SwitchAccountForm,
} from "./wallet/index.js";

const Wallet = () => {
    
  return (
    <>
      <Head></Head>
      <div className="hidden">
        <div id="pageContent">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 align-self-center">
                <div
                  class="alert alert-success"
                  role="alert"
                  id="successBanner"
                >
                  <strong>Success!</strong>
                  <p id="successMessage"></p>
                </div>
                <div
                  class="alert alert-warning"
                  role="alert"
                  id="warningBanner"
                >
                  <strong>Warning!</strong>
                  <p id="warningMessage"></p>
                </div>
                <div class="alert alert-danger" role="alert" id="errorBanner">
                  <strong>Error!</strong>. <span id="errorText"></span>
                </div>
                <AccountRegistrationForm />
                <BackupModal />
                <ConfirmContractCallModal />
                <ConnectLoginDetected />
                <ConnectLoginNotDetected />
                <ContinueWithAccountConfirmation />
                <ContractCallModal />
                {/*<CreateTxModal/>*/}
                <LogoutModal />
                <RecoverModal />
                <SignMessageModal />
                <SignTxModal />
                <SwitchAccountForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Scripts></Scripts>

        <Helmet>
            <script>
            {window.onload = function(e) {
                $('body').removeClass('hidden');}
            }
            </script>
        </Helmet>
    </>
  );
};

export default Wallet;
