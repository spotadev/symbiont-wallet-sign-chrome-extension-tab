
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
    if (message.action === "openWalletCollectInNewTab") {
      let fileUrl = chrome.runtime.getURL("tab.html");
      fileUrl = fileUrl + '#/walletconnect';
      chrome.tabs.create({ url: fileUrl });
    }
    else if (message.action === "openMetaMaskBrowserInNewTab") {
      let fileUrl = chrome.runtime.getURL("tab.html");
      fileUrl = fileUrl + '#/metamask';
      chrome.tabs.create({ url: fileUrl });
    }
    else if (message.action === "openDisconnectInNewTab") {
      let fileUrl = chrome.runtime.getURL("tab.html");
      fileUrl = fileUrl + '#/disconnect';
      chrome.tabs.create({ url: fileUrl });
    }
    else if (message.action === "loggedIn") {
      notifyContentScriptsThatLoggedIn();
    }
  });
}

// Start execution =================================================================================
initListeners();
