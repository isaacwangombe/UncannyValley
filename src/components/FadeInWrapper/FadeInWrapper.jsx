import React, { useEffect, useState } from "react";
import "./FadeInWrapper.css";

const FadeInWrapper = ({ children }) => {
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    // Reset the class to retrigger animation on each component mount
    setFadeClass("");
    const timeout = setTimeout(() => setFadeClass("fade-in"), 0);

    return () => clearTimeout(timeout);
  }, []); // Only reset when the component mounts or unmounts

  return <div className={fadeClass}>{children}</div>;
};

export default FadeInWrapper;
