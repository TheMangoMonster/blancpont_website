import React, { useEffect, useState } from "react";
import "../stylesheets/LogoAnimation.css";

function LogoAnimation({ onLogoLoad }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLogoLoad();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`logo-animation ${isVisible ? "visible" : ""}`}>
      <img
        src={process.env.PUBLIC_URL + "/icons/logo.svg"}
        alt="BlancPont Logo"
        className="logo"
      />
    </div>
  );
}

export default LogoAnimation;
