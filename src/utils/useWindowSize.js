import React from 'react'

// import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = React.useState(
    isWindowClient ? window.innerWidth : undefined
  );

  React.useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth);
    }
    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  return windowSize;
}

export default useWindowSize;