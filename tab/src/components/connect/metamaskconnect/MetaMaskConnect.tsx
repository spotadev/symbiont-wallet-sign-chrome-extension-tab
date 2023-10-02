import { createExternalExtensionProvider, initializeProvider, StreamProvider } from "@metamask/providers";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Connector, WagmiConfig, WindowProvider, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from 'wagmi/chains';
import LocalMessageDuplexStream from 'post-message-stream';


export default function MetaMaskConnect() {

  // const metamaskPort = chrome.runtime.connect('chrome');
  // const pluginStream = new PortStream(metamaskPort)
  // let provider = new MetaMaskInpageProvider(pluginStream)

  // return (
  //   <WagmiConfig config={config}>
  //     MetaMaskConnect
  //   </WagmiConfig>
  // );

  return (<></>);
}