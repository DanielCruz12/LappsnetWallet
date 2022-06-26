import React from "react";
import { Helmet } from "react-helmet";
import Head from "./Head";

const Docs = () => {
  return (
    <>
    <Head></Head>
      <Helmet>
        <title>Welcome file</title>
        <link rel="stylesheet" href="https://stackedit.io/style.css" />
      </Helmet>

      <div className="stackedit">
        <div className="stackedit__html">
          <h1 id="lappsnet-wallet">Lappsnet Wallet</h1>
          <p>
            Wallet for interacting with Lappsnet, an experimental network of
            smart contracts for Lightning Network users.
          </p>
          <h2 id="table-of-contents">Table of Contents</h2>
          <ul>
            <li>
              <a href="#user-instructions">Using the wallet</a>
            </li>
            <li>
              <a href="#how-to-withdraw-to-ln">How to withdraw to LN</a>
            </li>
            <li>
              <a href="#how-to-get-esat-tokens">How to get ESAT tokens</a>
            </li>
            <li>
              <a href="#how-to-recover">How to Recover</a>
            </li>
            <li>
              <a href="#developer-instructions">Developer Instructions</a>
            </li>
          </ul>
          <h2 id="user-instructions">User instructions</h2>
          <h3 id="create-key">Create key</h3>
          <p>
            Visit{" "}
            <a href="https://wallet.lappsnet.io/wallet">
              https://wallet.lappsnet.io/wallet
            </a>{" "}
            to create an account.
          </p>
          <p>
            Your browser will generate a private key, which is then encrypted
            using your security chip. (Screen lock, Yubikey, etc.)
          </p>
          <p>
            You register a username with Lappsnet Wallet’s servers, which stores
            the encryption key for you.<br></br>
            The encrypted private key is stored in your browser.
          </p>
          <p>
            Finally, back up your private key, secured by a password, in your
            password manager.
          </p>
          <h3 id="connecting-to-dapps">Connecting to dapps</h3>
          <p>
            Connecting to dApps is done by signing a message provided by the
            dapp.
          </p>
          <p>
            It should look something like <code>nonce: asdfasdfasdf</code> or{" "}
            <code>asdfasdfasdf</code>.<br></br>
            If it looks like it could be a transaction or authorization, DO NOT
            SIGN.
          </p>
          <p>
            Otherwise, sign it and you should be redirected to the dApp as a
            logged in user.
          </p>
          <h3 id="signing-transactions">Signing transactions</h3>
          <p>Some dApps may prepare a transaction for you to sign.</p>
          <p>
            Once on Lappsnet Wallet, check the contents of the transaction
            before signing.<br></br>
            <em>THIS IS CRUCIAL!</em>
          </p>
          <p>
            If the transaction looks fine (destination address, amount, etc.),
            sign it.
          </p>
          <p>
            The transaction will be broadcast, and the dapp will be notified.
          </p>
          <h3 id="create-transaction">Create transaction</h3>
          <p>
            You can also initiate transactions yourself, from{" "}
            <a href="https://wallet.lappsnet.io/wallet">
              https://wallet.lappsnet.io/wallet
            </a>
            .
          </p>
          <p>
            Choose whether you want to send ESATs (the native currency of
            Lappsnet), or other tokens.
          </p>
          <p>
            TIP: Clicking on a token in the list will open a create transaction
            form for that token!
          </p>
          <h3 id="call-contract">Call contract</h3>
          <p>
            You can also make contract calls directly from within Lappsnet
            Wallet.
          </p>
          <p>
            For this, you must specify the contract address, method, and enter
            parameters as necessary.<br></br>
            Some operations may cost gas, while others may be free. You will be
            shown an estimated gas cost when confirming.
          </p>
          <p>
            After entering the contract address, click ‘load’ to get a list of
            methods.
          </p>
          <p>
            Note: Only contracts verified on the{" "}
            <a href="https://explorer.lappsnet.io">explorer</a> can be called
            this way.
          </p>
          <p>
            You will see the result of a contract call in a success or error
            message at the top of the page.
          </p>
          <h2 id="how-to-withdraw-to-ln">How to withdraw to LN</h2>
          <p>
            Visit the{" "}
            <a href="https://wallet.lappsnet.io/redeem">Redeem page</a> while
            you are logged into your lappsnet wallet.<br></br>
            You will be asked to provide an invoice where the amount is{" "}
            <code>
              100 sats &lt;= amount in sats &lt; (ESAT balance / 1.02)
            </code>
          </p>
          <p>
            Note that we charge a 2% fee on withdrawals to cover any potential
            Lightning Network fees.<br></br>
            Therefore, the withdrawal rate is{" "}
            <code>100 satoshi : 102 ESAT</code>.
          </p>
          <p>
            If all routes to your wallet cost more than 2% in fees, the
            withdrawal will fail.
          </p>
          <p>
            You can also withdraw to LN while logged in using your recovery key.
          </p>
          <h2 id="how-to-get-esat-tokens">How to get ESAT tokens</h2>
          <p>
            Visit the <a href="https://web.lappsnet.io/">Lappsnet website</a> to
            purchase ESAT tokens at a rate of{" "}
            <code>100 ESAT : 100 satoshi</code>.
          </p>
          <h2 id="how-to-recover">How to recover</h2>
          <p>
            When you create your wallet, you will be asked to enter a passphrase
            to encrypt a backup key.<br></br>
            Store the encrypted key in your password manager when prompted. (
            <em>Not the passphrase!</em>)
          </p>
          <p>
            You can also initiate a fresh backup at any time while logged in.
          </p>
          <p>
            Unable to log into your wallet? Here is a troubleshooting guide:
          </p>
          <h3 id="lappsnet-wallet-server-unavailable">
            Lappsnet Wallet server unavailable
          </h3>
          <p>
            If the Lappsnet servers are down, you will have to run a local or
            cached version of Lappsnet wallet to recover your account.
          </p>
          <p>
            Use the ‘recover account’ option, and enter your encrypted private
            key (saved in your password manager) and passphrase.
          </p>
          <h3 id="browser-data-cleared">Browser data cleared</h3>
          <p>
            Clearing browsing data may delete your local key.<br></br>
            In such case, you will not be able to recover your account by
            authenticating with our servers.
          </p>
          <p>
            Use the ‘recover account’ option, and enter your encrypted private
            key (saved in your password manager) and passphrase.
          </p>
          <h3 id="security-device-lostbroken">Security device lost/broken</h3>
          <p>
            If the security device (e.g. screen lock, YubiKey) is lost or
            broken, you will not be able to authenticate with the server. This
            may include hard resets of your device!
          </p>
          <p>
            Use the ‘recover account’ option, and enter your encrypted private
            key (saved in your password manager) and passphrase.
          </p>
          <p>
            For maximum safety, make sure your password manager data is stored
            on multiple devices.
          </p>
          <h2 id="developer-instructions">Developer instructions</h2>
          <p>
            There are 5 operations available, all initiated by a user opening a
            link in a new tab.
          </p>
          <h3 id="connect-wallet">Connect wallet</h3>
          <p>
            Path: <code>https://wallet.lappsnet.io/wallet</code>
          </p>

          <table>
            <thead>
              <tr>
                <th>parameter</th>
                <th>required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>connect=true</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>nonce=&lt;nonce&gt;</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>
                    callbackUrl=&lt;encodeURIComponent(callback url)&gt;
                  </code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>callbackMethod=GET</code>
                </td>
                <td>no</td>
              </tr>
            </tbody>
          </table>
          <p>
            Generate a nonce for each wallet connection attempt. The nonce
            should preferably be human-readable.
          </p>
          <p>
            The user will follow the link, sign the nonce with their account,
            and a callback will POST{" "}
            {/* <code>{ signature, publicAddress }</code >*/}to the specified
            URL.
          </p>
          <p>
            If <code>callbackMethod=GET</code> is specified, instead of a POST
            callback, the user will be redirected to{" "}
            {/* <code>${callbackUrl}?address=${address}&signature=${signature}</code> */}
          </p>
          <h3 id="sign-and-broadcast-transaction">
            Sign and broadcast transaction
          </h3>
          <p>
            Path: <code>https://wallet.lappsnet.io/wallet</code>
          </p>

          <table>
            <thead>
              <tr>
                <th>parameter</th>
                <th>required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>signTx=true</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>txData=&lt;base64URL encoded tx&gt;</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>
                    callbackUrl=&lt;encodeURIComponent(callback url)&gt;
                  </code>
                </td>
                <td>no</td>
              </tr>
              <tr>
                <td>
                  <code>callbackMethod=GET</code>
                </td>
                <td>no</td>
              </tr>
            </tbody>
          </table>
          <p>
            The user is asked to sign and broadcast the transaction provided in
            the <code>txData</code> parameter.
          </p>
          <p>
            The {/* <code>{ txhash }</code> */} will be POSTed to the callback
            url if specified. Verify if necessary.
          </p>
          <p>
            If <code>callbackMethod=GET</code> is specified, instead of a POST
            callback, the user will be redirected to{" "}
            {/* <code>${callbackUrl}?txhash=${transactionHash}</code> */}
          </p>
          <h3 id="create-transaction-1">Create transaction</h3>
          <p>
            Path: <code>https://wallet.lappsnet.io/wallet</code>
          </p>

          <table>
            <thead>
              <tr>
                <th>parameter</th>
                <th>required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>createTx=true</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>amount=&lt;number of tokens, NOT Wei&gt;</code>
                </td>
                <td>no</td>
              </tr>
              <tr>
                <td>
                  <code>to=&lt;recipient address&gt;</code>
                </td>
                <td>no</td>
              </tr>
              <tr>
                <td>
                  <code>contractAddress=&lt;ERC20 token contract&gt;</code>
                </td>
                <td>no</td>
              </tr>
              <tr>
                <td>
                  <code>
                    callbackUrl=&lt;encodeURIComponent(callback url)&gt;
                  </code>
                </td>
                <td>no</td>
              </tr>
              <tr>
                <td>
                  <code>callbackMethod=GET</code>
                </td>
                <td>no</td>
              </tr>
            </tbody>
          </table>
          <p>
            The user is asked to create a transaction. Defaults to sending ESATs
            (Lappsnet’s native token), unless <code>contractAddress</code> is
            specified.
          </p>
          <p>
            All parameters given are entered in the form presented to the user,
            but the user may edit these values.
          </p>
          <p>
            Once the user creates, signs, and broadcasts their transaction,
            {/*  <code>{ txhash }</code> */} will be POSTed to callback url if
            specified.
          </p>
          <p>
            If <code>callbackMethod=GET</code> is specified, instead of a POST
            callback, the user will be redirected to
            {/*  <code>${callbackUrl}?txhash=${transactionHash}</code> */}
          </p>
          <h3 id="call-contract-1">Call contract</h3>
          <p>
            (<em>Contract MUST BE VERIFIED</em> on{" "}
            <a href="https://explorer.Lappsnet.xyz">explorer</a>)
          </p>
          <p>
            Path: <code>https://wallet.lappsnet.io/wallet</code>
          </p>

          <table>
            <thead>
              <tr>
                <th>parameter</th>
                <th>required?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>callContract=true</code>
                </td>
                <td>YES</td>
              </tr>
              <tr>
                <td>
                  <code>contractAddress=&lt;contract address&gt;</code>
                </td>
                <td>no</td>
              </tr>
            </tbody>
          </table>
          <p>You can send users to make contract calls on their own.</p>
          <p>
            If <code>contractAddress</code> is specified, the user will be shown
            a list of methods for that contract, with corresponding input
            fields.
          </p>
          <p>
            The user provides the necessary inputs, and a gas estimate is given
            for confirmation.
          </p>
          <p>
            The chosen method will be called using send() or call() depending on
            the method.<br></br>
            The result is displayed to the user in a success or error banner.
          </p>
          <h3 id="open-wallet">Open wallet</h3>
          <p>
            Path: <code>https://wallet.lappsnet.io/wallet</code>
          </p>
          <p>Simply opens the wallet for the user to operate.</p>
        </div>
      </div>
    </>
  );
};

export default Docs;
