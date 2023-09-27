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

  return (
    <div className={appStyle.container}>
      <div className={appStyle.title}>Login</div>
      <div className={appStyle.row}>
        <div className={appStyle.col_25}>
          Blah
        </div>
        <div className={appStyle.col_75}>
          Bling
        </div>
      </div>
    </div>
  );
}
