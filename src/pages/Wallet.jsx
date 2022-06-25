import React from 'react'
import 
  { AccountRegistrationForm,
    BackupModal,
    ConfirmContractCallModal,
    ConnectLoginDetected,
    ConnectLoginNotDetected,
    ContinueWithAccountConfirmation,
    ContractCallModal,
    CreateTxModal,
    LogoutModal,
    RecoverModal,
    SignMessageModal,
    SignTxModal,
    SwitchAccountForm

  } from "../components/wallet/index";

const Wallet = () => {
  return (
    <>
      <AccountRegistrationForm/>
      <BackupModal/>
      <ConfirmContractCallModal/>
      <ConnectLoginDetected/>
      <ConnectLoginNotDetected/>
      <ContinueWithAccountConfirmation/>
      <ContractCallModal/>
      <CreateTxModal/>
      <LogoutModal/>
      <RecoverModal/>
      <SignMessageModal/>
      <SignTxModal/>
      <SwitchAccountForm/>
    </>
  )
}

export default Wallet