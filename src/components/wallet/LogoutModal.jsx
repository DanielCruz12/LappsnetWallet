import React from "react";

const LogoutModal = () => {
  return (
    <div>
      <div className="modal" id="logoutModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign out?</h5>
            </div>
            <div className="modal-body">
              <p>
                We strongly suggest you back up your account before signing out.
              </p>
              <p>
                If your browser data is cleared, this is the only way to recover
                your account.
              </p>
              <button type="button" className="btn btn-primary backUpKey">
                Back up
              </button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger logOutBtn">
                Log out
              </button>
              <button
                type="button"
                className="btn btn-secondary cancelLogout"
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

export default LogoutModal;
