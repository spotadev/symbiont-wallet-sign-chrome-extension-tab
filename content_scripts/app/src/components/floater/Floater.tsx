import { useEffect, useRef } from "react";
import useDrag from "../../hooks/useDrag";
import SmallFloater from "./small/SmallFloater";
import BigFloater from "./big/BigFloater";
import { useGlobalStateContext } from '../../context/GlobalStateContext';

export default function Floater(props: any) {

  const {
    loggedIn,
    floaterMaximised,
    setFloaterMaximised,
  } = useGlobalStateContext();

  const floaterRef = useRef<HTMLDivElement | null>(null);
  const { dragStyle, dragStart, drag } = useDrag({ divRef: floaterRef });

  const maximise = () => {
    // here we want to hide the banner and create the maximised version.
    setFloaterMaximised(true);
  };

  const minimise = () => {
    // here we want to hide the banner and create the small version.
    setFloaterMaximised(false);
  };



  useEffect(() => {

  }, [loggedIn]);

  return (
    !floaterMaximised ? (
      <SmallFloater dragStart={dragStart} drag={drag} style={dragStyle} maximiseFunction={maximise} />
    ) : (
      <BigFloater dragStart={dragStart} drag={drag} style={dragStyle} minimiseFunction={minimise} />
    )
  );
} 