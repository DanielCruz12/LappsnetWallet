import React from "react";

const AccountRegistrationForm = () => {
  return (
    <div>
      <div id="accountRegistrationForm">
        <legend>Request a unique username.</legend>
        <input
          className="w-100 form-control"
          id="newUsernameInput"
          name="username"
          type="text"
        ></input>
        <button className="btn btn-disabled" type="button" id="registerAccount">
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
            id="registerAccountSpinner"
          ></span>
          Create account
        </button>
      </div>
    </div>
  );
};

export default AccountRegistrationForm;
