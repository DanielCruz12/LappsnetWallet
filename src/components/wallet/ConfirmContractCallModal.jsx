import React from "react";

const ConfirmContractCallModal = () => {
  return (
    <div>
      <div className="modal" id="confirmContractCallModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm contract call</h5>
            </div>
            <div className="modal-body">
              <p>Make contract call?</p>
              <code className="confirmContractCallContents"></code>
              <p>
                Estimated gas: <code id="estimatedCallGas"></code>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary confirmCallBtn">
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  id="confirmCallSpinner"
                ></span>
                Enter
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelConfirmCall"
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

export default ConfirmContractCallModal;
