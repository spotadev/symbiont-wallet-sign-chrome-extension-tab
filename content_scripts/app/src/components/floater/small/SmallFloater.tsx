import styles from './SmallFloater.module.css';
import { useEffect, useState } from 'react';
import { useGlobalStateContext } from '../../../context/GlobalStateContext';

export default function SmallFloater(props: any) {

  const [smallFloaterClassName, setSmallFloaterClassName] = useState<string>();
  const extensionID = chrome.runtime.id;
  const iconImagePath = `chrome-extension://${extensionID}/lion.png`;
  const widthIconImage = "35px";
  const maximizeImagePath = `chrome-extension://${extensionID}/maximize.png`;
  const widthMaximizeImage = "20px";

  const {
    setFloaterMaximised
  } = useGlobalStateContext();

  const maximize = () => {
    setFloaterMaximised(true);
  }

  useEffect(() => {
    setSmallFloaterClassName(styles.SmallFloater);
  }, []);

  return (
    <div
      className={smallFloaterClassName}
      onDragStart={props.dragStart}
      onDrag={props.drag}
      style={props.style}>
      <img src={iconImagePath} width={widthIconImage} style={{ cursor: "move" }} />
      <div style={{ padding: "4px" }}>
        <img src={maximizeImagePath}
          width={widthMaximizeImage}
          alt="Maximize"
          style={{ cursor: "pointer" }}
          onClick={maximize} />
      </div>
    </div>
  );
}