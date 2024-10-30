import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook for navigation

import { Link } from "react-router-dom";

import "./NewHomePage.css";
import HTMLFlipBook from "react-pageflip";


import NavbarWithSubmenu from "../../components/navbar/navbar";

import NewHomePageContent from "./NewHomePageContent";

const NewHomePage = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isFading, setIsFading] = useState(false); // State to control the fade out
  const navigate = useNavigate(); // Initialize the navigation hook


  const handleShrink = () => {
    setIsShrunk(true); // Trigger shrinking
    setTimeout(() => {
      setIsFading(true); // Start fading after the shrink completes
    }, 500); // Wait for the shrinking animation to finish
  };

  useEffect(() => {
    if (isShrunk) {
      // Set timeout to wait for the transition to finish (500ms)
      const timer = setTimeout(() => {
        navigate("/comic-categories"); // Navigate to the new page
      }, 500);

      return () => clearTimeout(timer); // Cleanup timeout if component unmounts
    }
  }, [isFading, navigate]);

  return (
    <div className="">
            <button onClick={handleShrink}>Shrink and Move</button>

      <NavbarWithSubmenu />
      <NewHomePageContent shrunk={isShrunk} />
    </div>
  );
};

export default NewHomePage;
