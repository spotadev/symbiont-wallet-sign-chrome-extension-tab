
# README

## Overview

This Chrome Extension is using Connect Wallet 2's Web3Modal 3.0.0-beta.4 to allow the user to connect their wallet to a tab chrome extension app.

Note that when an app is openend in a new tab it has a chrome extension url like:

    chrome-extension://oahhaapnfpkfnbgeopliehfgenifngde/tab.html#connect

This means that your wallet will be connected to the extension url:

    chrome-extension://oahhaapnfpkfnbgeopliehfgenifngde

and not the url the content script happens to be on.  

    e.g. will not connect to google.com

The tab app can communicate back to the background script and the background script can communicate to all open tabs running the content script to let the content scripts knowing the user has connected their wallet.

## Source code

Replace javaspeak with your github username:

    cd ~
    mkdir GITHUB
    cd GITHUB
    git clone https://github.com/spotadev/symbiont-wallet-sign-chrome-extension-tab.git

## Building and deploying extension

(i) Install nvm / npm

    nvm allows you to install specific versions of node and select which version to use

(ii) Change into scripts directory and give executable permissions to scripts"

   cd scripts
   chmod ugo+x *.sh

(ii) Install all dependencies:

    . ./install_all.sh

(iii) Build all projects

    . ./build_all.sh

(iv) Installing extension

    In your chrome browser open:

      chrome://extensions/

    Move toggle to Developer Mode

    Load Unpacked => Navigate to the build directory and select it
