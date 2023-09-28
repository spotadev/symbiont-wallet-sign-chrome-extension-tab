import style from './Login.module.css';
import appStyle from '../../../../../App.module.css';
import { useGlobalStateContext } from '../../../../../context/GlobalStateContext';
import { ContentModeEnum } from '../../../../../enums/CurrentModeEnum';
import { useState } from 'react';

export default function Login(props: any) {
  const {
    setContentMode,
    setLoggedIn,
  } = useGlobalStateContext();

  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);

  const extensionHash = chrome.runtime.id;
  const chromeExtensionUrl = `chrome-extension://{extensionHash}`;

  const openWalletConnectInNewTab = () => {
    chrome.runtime.sendMessage({ action: "openWalletCollectInNewTab" });
  }

  const openMetaMaskBrowserInNewTab = () => {
    chrome.runtime.sendMessage({ action: "openMetaMaskBrowserInNewTab" });
  }

  const getJSX = () => {
    if (connected) {
      return getConnectedJSX();
    }
    else {
      return getConnectJSX();
    }
  }

  const disconnect = () => {
    chrome.runtime.sendMessage({ action: "openDisconnectInNewTab" });
  }

  const getConnectedJSX = () => {
    return (
      <div className={appStyle.container}>
        <div className={appStyle.title}>Connected</div>
        <div className={appStyle.row}>
          <div className={appStyle.col_25}>
            Wallet Address:
          </div>
          <div className={appStyle.col_75}>
            {walletAddress}
          </div>
        </div>
        <div className={appStyle.row}>
          <div className={appStyle.col_100}>
            To disconnect click the Disconnect button.  It will open up a new tab with
            a button to disconnect.
          </div>
        </div>
        <div className={appStyle.row}>
          <div className={appStyle.col_100}>
            <button
              className={appStyle.button}
              onClick={disconnect}>Disconnect</button>
          </div>
        </div>
      </div>
    );
  }

  const getConnectJSX = () => {
    return (
      <div className={appStyle.container}>
        <div className={appStyle.title}>Login</div>
        <div className={appStyle.row}>
          <div className={appStyle.col_100}>
            There are 2 options for logging in:
            <ul>
              <li>Connect to a Mobile Wallet using Wallet Connect and a QRCode</li>
              <li>Connect to Meta Mask Browser Wallet</li>
            </ul>
            When you click an option it will open up in a new tab and connect your wallet to
            the chrome extension which looks like:
            <p>
              {chromeExtensionUrl}
            </p>
            <p>
              Note that most browser wallets inject their proxy connection into window.ethereum
              but window.ethereum is not visible within a chrome extension context.  Meta Mask
              however offers a Duplex Port Stream way of connecting to it which is why we can
              offer Meta Mask as a browser wallet connection option.
            </p>
          </div>
        </div>

        <div className={appStyle.row}>
          <div className={appStyle.col_100}>
            <button
              className={appStyle.button}
              onClick={openWalletConnectInNewTab}>Connect to Mobile Wallet</button>
            <button
              className={appStyle.button}
              style={{ paddingLeft: "20px" }}
              onClick={openMetaMaskBrowserInNewTab}>Connect to Meta Mask Browser Wallet</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {getJSX()}
    </>
  );
}
