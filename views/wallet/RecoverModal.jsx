import React from "react";

const RecoverModal = () => {
  return (
    <div>
      <div className="modal" id="recoverModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Enter recovery key</h5>
            </div>
            <div className="modal-body">
              <form id="recoveryFormBody">
                <fieldset>
                  <legend className="m-3">
                    Paste your recovery key below and press button
                  </legend>
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="encryptedBackup">Backup data</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control w-100"
                        id="encryptedBackup"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <label for="yourPw">Pass phrase</label>
                    </div>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="yourPw"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="recoverBtn"
                      >
                        Recover account
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary cancelRecovery"
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

export default RecoverModal;
