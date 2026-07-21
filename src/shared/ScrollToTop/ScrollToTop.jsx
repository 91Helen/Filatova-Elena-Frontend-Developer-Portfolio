import { useState, useEffect } from "react";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [direction, setDirection] = useState("up"); 

useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      
    
      if (scrollPosition > docHeight / 2) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (direction === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div 
      className={`scroll-button ${direction}`} 
      onClick={handleClick}
    >
      <span className={`chevron ${direction}`}></span>
    </div>
  );
};