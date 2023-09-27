import React, { useState, RefObject } from "react";

interface props {
  divRef: RefObject<HTMLDivElement>;
}

// A custom hook for dragging div element
const useDrag = ({ divRef }: props) => {

  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [dragStyle, setDragStyle] = useState<{ top: string; left: string }>();

  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    (img.style as any).opacity = 0;

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    if (divRef.current) {
      let banner = divRef.current.getBoundingClientRect();
      setOffsetX(mouseX - banner.left);
      setOffsetY(mouseY - banner.top);
      event.dataTransfer.setDragImage(img, 0, 0)
    }
  };

  const drag = (event: React.DragEvent<HTMLDivElement>) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    if (mouseX > 0 && mouseY > 0) {
      setDragStyle({
        top: `${Math.floor(mouseY - offsetY)}px`,
        left: `${Math.floor(mouseX - offsetX)}px`,
      });
    }
  };

  return {
    dragStyle,
    dragStart,
    drag,
  };
};

export default useDrag;
