// src/components/CustomComponents/FadeTransition.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./FadeTransition.css"; // Ensure this file exists and has the correct styles

function FadeTransition({ children }) {
  const location = useLocation(); // Get the current location
  const [isFading, setIsFading] = useState(false);

  // Effect to handle fade-out on location change
  useEffect(() => {
    setIsFading(true); // Start fade-out animation
    const timer = setTimeout(() => {
      setIsFading(false); // Trigger fade-in after transition
    }, 500); // Match this duration with your CSS transition duration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location]); // Run when the location changes

  return (
    <div className={`fade-wrapper ${isFading ? "fade-out" : "fade-in"}`}>
      {children}
    </div>
  );
}

export default FadeTransition;
