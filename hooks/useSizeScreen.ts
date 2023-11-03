import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

export const useSizeScreen = () => {
  const initialState: ScreenSize = {
    width: 0,
    height: 0,
  };

  const [size, setSize] = useState<ScreenSize>(initialState);

  const changeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    setSize({ width, height });
  };

  useEffect(() => {
    changeSize();
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return size;
};
