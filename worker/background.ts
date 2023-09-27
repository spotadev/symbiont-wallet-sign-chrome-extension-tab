//import { encryptStringAndSave } from '../content_scripts/app/src/helpers/extension_storage/extensionStorageHelper';

const notifyContentScriptsThatLoggedIn = () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        console.log('Sending loggedin message to tab with url: ' + tab.url);
        chrome.tabs.sendMessage(tab.id, { action: 'loggedIn' });
      }
    });
  });
}


const initListeners = () => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openRegisterWalletTab") {
      let fileUrl = chrome.runtime.getURL("tab.html");
      fileUrl = fileUrl + '#/register';
      chrome.tabs.create({ url: fileUrl });
    }
    else if (message.action === "loginUsingCrytoWallet") {
      let jwtToken = message.jwtToken;
      // encryptStringAndSave('session', jwtToken);
      notifyContentScriptsThatLoggedIn();
    }
  });
}

// Start execution =================================================================================
initListeners();
