import React from 'react'

const ConnectLoginNotDetected = () => {
  return (
    <div><div id="connectLoginNotDetected">
    <p>You are not currently signed into Lappsnet.</p>
    <ul>
      <li className="btn btn-success m-1 createNewAccount">Create new account</li>
      <li className="btn btn-success m-1" id="logIn">Login by username</li>
    </ul>
    <p className="m-1">Can't login? <strong className="recoverAccount strongBtn">Recover account</strong></p>
    <p className="mt-4 text-center"><a href="/"><strong className="navBtn">About</strong></a></p>
    <p className="mt-4 text-center"><a href="/docs"><strong className="navBtn">Documentation</strong></a></p>
  </div></div>
  )
}

export default ConnectLoginNotDetected