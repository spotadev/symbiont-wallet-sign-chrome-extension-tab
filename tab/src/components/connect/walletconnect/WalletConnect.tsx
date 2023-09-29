import React, { useEffect } from 'react';
import appStyle from '../../../App.module.css';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig, useAccount, useSignMessage } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import ConnectInfo from './ConnectInfo';
import Buttons from './Buttons';
import Sign from './Sign';

// 1. Get projectId
const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;
console.log('projectId', projectId);

if (!projectId) {
  throw new Error('Please copy .env.sample to .env and set variables');
}

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum];
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

// Required because of bug:
// https://github.com/WalletConnect/walletconnect-monorepo/issues/3165
localStorage.clear()

export default function WalletConnect() {

  return (
    <WagmiConfig config={wagmiConfig}>
      <div className={appStyle.centeredPage}>
        <span style={{ fontWeight: 'bold' }}>Demo using Web3Modal 3.0.2</span>
        <br /><br />
        This example allows you to connect to your wallet and sign some
        text.  The Sign Button shows once connected.
        <br /><br />
        <Buttons />
        <br /><br />
        <ConnectInfo />
        <br /><br />
        <Sign />
        Not included in this example, but none the less relevant:
        <br /><br />
        <div style={{ paddingLeft: '20px' }}>
          If your are creating a login using your wallet you will
          need to send the signature to the backend to be verified.
        </div>
      </div>
    </WagmiConfig>
  );
}