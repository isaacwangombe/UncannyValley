import { useState, useEffect } from "react";

const useScreenSize = (maxWidth = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Media query for screen sizes smaller than the provided maxWidth
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    // Handler function for media query change
    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches); // Set state based on screen size
    };

    // Check initial screen size
    handleScreenChange(mediaQuery);

    // Add event listener to media query
    mediaQuery.addEventListener("change", handleScreenChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, [maxWidth]);

  return isSmallScreen;
};

export default useScreenSize;
