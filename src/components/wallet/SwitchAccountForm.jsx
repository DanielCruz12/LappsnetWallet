import React from 'react'

const SwitchAccountForm = () => {
  return (
    <div><div id="switchAccountForm">
    <legend>Enter username of account.</legend>
    <input className="form-control w-100" id="altUsernameInput" type="text"></input>
    <div className="btn btn-success" id="logIntoAccount">Log into account</div>
  </div></div>
  )
}

export default SwitchAccountForm