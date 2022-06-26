import React from "react";
import Web3 from "web3";
import { Helmet } from "react-helmet";
import Head from "./Head";

const Scripts = () => {
  return (
    <>
      <Helmet>
        <script src="../public/js/refactor/wallet/components"></script>
        <script src="../public/js/refactor/wallet/components/contractCall.js"></script>
        <script src="../public/js/refactor/wallet/components/createTx.js"></script>
        <script src="../public/js/refactor/wallet/components/login.js"></script>
        <script src="../public/js/refactor/wallet/components/logout.js"></script>
        <script src="../public/js/refactor/wallet/components/newAccount.js"></script>
        <script src="../public/js/refactor/wallet/components/recoverAccount.js"></script>
        <script src="../public/js/refactor/wallet/components/signMessage.js"></script>
        <script src="../public/js/refactor/wallet/components/signTx.js"></script>
        <script src="../public/js/refactor/wallet/utils/base64.min.js"></script>
        <script src="../public/js/refactor/wallet/utils/callback.js"></script>
        <script src="../public/js/refactor/wallet/utils/copyAddress.js"></script>
        <script src="../public/js/refactor/wallet/utils/escapeHTML.js"></script>
        <script src="../public/js/refactor/wallet/utils/fido.js"></script>
        <script src="../public/js/refactor/wallet/utils/messages.js"></script>
        <script src="../public/js/refactor/wallet/utils/walletBalance.js"></script>
        <script src="../public/js/refactor/wallet/index.js"></script>
      </Helmet>
    </>
  );
};

export default Scripts;
