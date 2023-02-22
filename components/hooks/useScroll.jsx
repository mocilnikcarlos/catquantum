"use client";
import { useEffect, useState } from "react";

const useScroll = () => {
  const [colorChange, setColorChange] = useState(false);

  const hasChange = () => {
    if (window.scrollY >= 90) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hasChange);
    return () => window.removeEventListener("scroll", hasChange);
  }, []);

  return colorChange;
};

export default useScroll;
