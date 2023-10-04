import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./stylesheets/GlobalStyles.css";

/*Page imports*/
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import LogoAnimation from "./components/LogoAnimation";

function App() {
  const [isLogoAnimationComplete, setLogoAnimationComplete] = useState(false);

  const handleLogoAnimationComplete = () => {
    setTimeout(() => {
      setLogoAnimationComplete(true);
    }, 1000);
  };

  return (
    <>
      {!isLogoAnimationComplete && (
        <LogoAnimation onLogoLoad={handleLogoAnimationComplete} />
      )}
      <Header />

      {isLogoAnimationComplete && (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
