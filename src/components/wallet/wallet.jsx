import React from 'react'
//import './wallet'

const wallet = () => {
  return (
    <div class="hidden">
    <div id="pageContent">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 align-self-center">
              <div class="alert alert-success" role="alert" id="successBanner">
                <strong>Success!</strong>
                <p id="successMessage"></p>
              </div>
              <div class="alert alert-warning" role="alert" id="warningBanner">
                <strong>Warning!</strong>
                <p id="warningMessage"></p>
              </div>
              <div class="alert alert-danger" role="alert" id="errorBanner">
                <strong>Error!</strong>. <span id="errorText"></span>
              </div>
              <div id="logoContainer">
                {/* <img src={logo} alt="logo"></img> */}
                {/* <%- include('./logo.ejs') %> */}
              </div>
              <h2 id="signInTitle">Lappsnet Wallet</h2>
          
              {/*  If not currently logged into Lappsnet */}
              {connectLoginNotDetected}
              {/* <%- include('./wallet/connectLoginNotDetected.ejs') %> */}

              {/*  Continue with account */}
              {continueWithAccountConfirmation}
              <%- include('./wallet/continueWithAccountConfirmation.ejs') %>
    
              {/*  If Lappsnet account detected */}
              {connectLoginDetected}
              <%- include('./wallet/connectLoginDetected.ejs') %>
              
              {/*  Register new account */}
              {accountRegistrationForm}
              <%- include('./wallet/accountRegistrationForm.ejs') %>
          
              {/*  Switch to different account */}
              {switchAccountForm}
              <%- include('./wallet/switchAccountForm.ejs') %>
  
              {/*  Logout conf modal */}
              {logoutModal}
              <%- include('./wallet/logoutModal.ejs') %>
  
              {/*  Recovery modal */}
              {recoverModal}
              <%- include('./wallet/recoverModal.ejs') %>
  
             {/*   Sign message modal */}
             {signMessageModal}
              <%- include('./wallet/signMessageModal.ejs') %>
  
              {/*  Sign transaction modal */}
              {signTxModal}
              <%- include('./wallet/signTxModal.ejs') %>
  
              {/*  Create transaction modal */}
              {createTxModal}
              <%- include('./wallet/createTxModal.ejs') %>

              {/*  Contract call modal */}
              {contractCallModal}
              <%- include('./wallet/contractCallModal.ejs') %>
              
              {/*  Contract call confirmation modal */}
              {confirmContractCallModal}
              <%- include('./wallet/confirmContractCallModal.ejs') %>

             {/*   Backup encrypted key modal */}
             {backupModal}
              <%- include('./wallet/backupModal.ejs') %>
            </div>
        </div>
      </div>
    </div>
    <script src="/js/refactor/wallet/components/backUpAccount.js"></script>
    <script src="/js/refactor/wallet/components/contractCall.js"></script>
    <script src="/js/refactor/wallet/components/createTx.js"></script>
    <script src="/js/refactor/wallet/components/login.js"></script>
    <script src="/js/refactor/wallet/components/logout.js"></script>
    <script src="/js/refactor/wallet/components/newAccount.js"></script>
    <script src="/js/refactor/wallet/components/recoverAccount.js"></script>
    <script src="/js/refactor/wallet/components/signMessage.js"></script>
    <script src="/js/refactor/wallet/components/signTx.js"></script>
    <script src="/js/refactor/wallet/utils/base64.min.js"></script>
    <script src="/js/refactor/wallet/utils/callback.js"></script>
    <script src="/js/refactor/wallet/utils/copyAddress.js"></script>
    <script src="/js/refactor/wallet/utils/escapeHTML.js"></script>
    <script src="/js/refactor/wallet/utils/fido.js"></script>
    <script src="/js/refactor/wallet/utils/messages.js"></script>
    <script src="/js/refactor/wallet/utils/walletBalance.js"></script>
    <script src="/js/refactor/wallet/index.js"></script>
    <script>
      {/* // Display page after all JS has loaded */}
      window.onload = function(e) {
        $('body').removeClass('hidden');
      }
    </script>
  </div>
  )
}

export default wallet