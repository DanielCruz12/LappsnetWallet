import React from "react";

const BackupModal = () => {
  return (
    <div>
      <div className="modal" id="backupModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Back up your key</h5>
            </div>
            <div className="modal-body">
              <div id="pwEntry">
                <p>Set a password to encrypt your backup</p>
                <input className="form-control w-100" type="text" id="backupPw" />
              </div>
              <div id="backupForm">
                <form id="backupFormBody">
                  <fieldset>
                    <legend className="m-3">
                      Save this backup in your password manager:
                    </legend>
                    <div className="row">
                      <div className="col-sm-4">
                        <label for="encrypted">Backup data</label>
                      </div>
                      <div className="col-sm-8">
                        <input
                          type="password"
                          className="form-control w-100"
                          id="encrypted"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4"></div>
                      <div className="col-sm-4">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          id="saveEncrypted"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupModal;
