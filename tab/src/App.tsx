// import React, { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import WalletConnect from './components/connect/walletconnect/WalletConnect';
import MetaMaskConnect from './components/connect/metamaskconnect/MetaMaskConnect';
import Disconnect from './components/disconnect/Disconnect';


function App(props: any) {

  return (
    <HashRouter>
      <Routes>
        <Route path="/walletconnect" element={<WalletConnect {...props} />} />
        <Route path="/metamask" element={<MetaMaskConnect {...props} />} />
        <Route path="/disconnect" element={<Disconnect {...props} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
