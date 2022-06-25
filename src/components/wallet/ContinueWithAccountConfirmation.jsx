import React from "react";

const ContinueWithAccountConfirmation = () => {
  return (
    <div>
      <div id="continueWithAccountConfirmation">
        <ul>
          <p>
            Continue as user{" "}
            <code className="usernameDisplay" id="userName-1"></code>, address{" "}
            <code className="addressDisplay" id="address-1"></code> ?
          </p>
          <li className="btn btn-success m-1 confirmAccount">
            <span className="actionType"></span>
          </li>
          <br></br>
          <li className="btn btn-secondary m-1 signOut">Sign out</li>
        </ul>
      </div>
    </div>
  );
};

export default ContinueWithAccountConfirmation;
