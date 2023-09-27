import { createContext, useContext } from 'react';
import { ContentModeEnum } from '../enums/CurrentModeEnum';

export type GlobalState = {

  contentMode: string;
  setContentMode: (c: string) => void;

  contentModePropsData: any;
  setContentModePropsData: (c: any) => void;

  error: any | null;
  setError: (c: any) => void;

  errorMessage: string | null;
  setErrorMessage: (c: string) => void;

  floaterMaximised: boolean;
  setFloaterMaximised: (c: boolean) => void;

  loggedIn: boolean;
  setLoggedIn: (c: boolean) => void;
};

export const GlobalStateContext = createContext<GlobalState>({
  contentMode: ContentModeEnum.LOGIN,
  setContentMode: () => { },

  contentModePropsData: null,
  setContentModePropsData: () => { },

  error: null,
  setError: () => { },

  errorMessage: null,
  setErrorMessage: () => { },

  floaterMaximised: false,
  setFloaterMaximised: () => { },

  loggedIn: false, // set a default value
  setLoggedIn: () => { }
});

export const useGlobalStateContext = () => useContext(GlobalStateContext);
