import style from './Header.module.css';
import appStyle from '../../../../App.module.css';
import { useGlobalStateContext } from '../../../../context/GlobalStateContext';
import { ContentModeEnum } from '../../../../enums/CurrentModeEnum';


export default function Header(props: any) {

  const {
    loggedIn,
    setLoggedIn,
    setContentMode,
    setErrorMessage,
    setError,
    setFloaterMaximised
  } = useGlobalStateContext();

  const extensionID = chrome.runtime.id;
  const imagePath = `chrome-extension://${extensionID}/lion.png`;
  const imageWidth = "35px";
  const minimizeImagePath = `chrome-extension://${extensionID}/minimize.png`;
  const widthMinimizeImage = "20px";

  const minimize = () => {
    setFloaterMaximised(false);
  }

  const loginLogoutClicked = () => {

    if (!loggedIn) {
      setContentMode(ContentModeEnum.LOGIN);
    }
    else {

    }
  }

  return (
    <>
      <div className={style.header}>
        <img src={imagePath} width={imageWidth} draggable="true" style={{ cursor: "move" }} />
        <div className={style.title}>Symbiont</div>
        <div style={{ padding: "6px" }}>
          <img src={minimizeImagePath} width={widthMinimizeImage} onClick={minimize} />
        </div>
      </div>
      <div className={appStyle.row}>
        <div style={{ paddingRight: "8px", float: 'right' }}>
          <span className={style.headerLink} onClick={loginLogoutClicked}>
            {loggedIn ? 'Logout' : 'Login'}
          </span>
        </div>
      </div>
    </>
  );
}