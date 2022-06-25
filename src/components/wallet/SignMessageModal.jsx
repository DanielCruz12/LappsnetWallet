import React from "react";

const SignMessageModal = () => {
  return (
    <div>
      <div className="modal" id="signMessageModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign message</h5>
            </div>
            <div className="modal-body">
              <p>Sign the below message to complete the action.</p>
              <p>Do NOT sign the message if it looks complicated!</p>
              <textarea id="signMessageInput" disabled></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary signMessageBtn">
                Sign & Return
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelSignMessage"
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

export default SignMessageModal;
