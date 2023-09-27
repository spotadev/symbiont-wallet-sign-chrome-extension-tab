import React, { useEffect, useState } from 'react';
import Floater from './components/floater/Floater';
import { ContentModeEnum } from './enums/CurrentModeEnum';
import { GlobalStateContext } from './context/GlobalStateContext';

function App() {
  const [contentMode, setContentMode] = useState<string>(ContentModeEnum.LOGIN);
  const [contentModePropsData, setContentModePropsData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [floaterMaximised, setFloaterMaximised] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const messageListener: (message: any, sender: chrome.runtime.MessageSender,
      sendResponse: (response: any) => void) => void = (message, sender, sendResponse) => {
        if (message.action === 'loggedIn') {
          console.log("Received message:", message);
          setLoggedIn(true);
        }
      };

    chrome.runtime.onMessage.addListener(messageListener);

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  // useEffect(() => { 
  // }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        contentMode,
        setContentMode,

        contentModePropsData,
        setContentModePropsData,

        error,
        setError,

        errorMessage,
        setErrorMessage,

        floaterMaximised,
        setFloaterMaximised,

        loggedIn,
        setLoggedIn
      }}
    >
      <Floater />
    </GlobalStateContext.Provider>
  );
}

export default App;
