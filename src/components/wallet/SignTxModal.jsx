import React from "react";

const SignTxModal = () => {
  return (
    <div>
      <div className="modal" id="signTxModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign transaction</h5>
            </div>
            <div className="modal-body">
              <p>Sign the below transaction?</p>
              <p>Make sure the transaction is what you intended!</p>
              <pre>
                <code className="codeBlock" id="signTxInput"></code>
              </pre>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary signTxBtn">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  id="signTxSpinner"
                ></span>
                Sign & Send
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelSignTx"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignTxModal;
