import React, { useState, useEffect } from "react";
import "../stylesheets/Slideshow.css";

function Slideshow({ images, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        clearInterval(interval);
        console.log("Slideshow finished");
        onFinish();
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        console.log("Next slide");
      }
    }, 400); // Transition every 0.3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images, onFinish]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}

export default Slideshow;
