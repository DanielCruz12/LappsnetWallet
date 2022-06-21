import React from 'react'

const redeem = () => {
  return (
    <div className='hidden'>
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
              <h2 id="signInTitle">Redeem ESATs</h2>
              <p class="mt-2 text-center">Withdraw to Lightning Network</p>
          
              {/* If not currently logged into Lappsnet, javascript redirect to /auth -->}

              {/* If Lappsnet account detected */}
              <div id="redeemDiv">
                <ul>
                  <h5 class="ml-2">Welcome, <code class="usernameDisplay" id="userName-1"></code></h5>
                  <h3 class="text-center border rounded-pill" id="esats"><span id="esatBalance"></span> ESAT</h3>
                  <p class="text-center"><code class="addressDisplay" id="address-1"></code></p>
                  <li class="btn btn-success m-1 redeemEsatsButton"><span>Redeem ESATs</span></li><br></br>
                  <p class="mt-1">A 2% withdrawal fee will be charged. <br></br> Minimum withdrawal: 100 sats (102 ESAT).</p>
                </ul>
                <p class="mt-4 text-center"><a href="/auth"><strong class="navBtn">Back to wallet</strong></a></p>
                <p class="mt-4 text-center"><a href="/"><strong class="navBtn">About</strong></a></p>
                <p class="mt-4 text-center"><a href="/docs"><strong class="navBtn">Documentation</strong></a></p>
              </div>

              {/* Redeem modal */}
              <div class="modal" id="redeemModal">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Redeem ESATs</h5>
                    </div>
                    <div class="modal-body">
                      <form>
                        <fieldset>
                          <legend class="mb-3">Provide an invoice to redeem sats.</legend>
                          <div class="form-group row formRow">
                            <div class="col-sm-4">
                              <label for="redeemInvoice">Invoice</label>
                            </div>
                            <div class="col-sm-8">
                              <input type="text" class="form-control w-100" id="redeemInvoice"></input>
                            </div>
                          </div>
                          <div class="form-group row formRow">
                            <div class="col-sm-4">
                              <label for="sendEsatAmt">ESATs to send:</label>
                            </div>
                            <div class="col-sm-8">
                              <input type="text" class="form-control w-100" id="sendEsatAmt" disabled></input>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="redeemBtn">
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" id="redeemSpinner"></span>
                        Redeem satoshis</button>
                      <button type="button" class="btn btn-secondary cancelRedemption" data-bs-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <script src="/js/refactor/redeem/index.js"></script>
    <script src="/js/refactor/redeem/utils/base64.min.js"></script>
    <script src="/js/refactor/redeem/utils/esatBalance.js"></script>
    <script src="/js/refactor/redeem/utils/fido.js"></script>
    <script src="/js/refactor/redeem/utils/parseInvoice.js"></script>
    <script src="/js/refactor/redeem/utils/requestSats.js"></script>

     <script>
      {/* // Display page after all JS has loaded */}
      window.onload = function(e) {
        $('body').removeClass('hidden');
      }
    </script> 

    </div>
  )
}

export default redeem