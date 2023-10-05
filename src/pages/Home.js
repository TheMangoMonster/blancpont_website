import React, { useState } from "react";
import "../stylesheets/Home.css";
import Gallery from "../components/Gallery";
import Slideshow from "../components/Slideshow";

function Home() {
  const [showReplacement, setShowReplacement] = useState(false);

  const handleSlideshowFinish = () => {
    setShowReplacement(true);
  };

  return (
    <div className="home">
      {!showReplacement ? (
        <div>
          <Slideshow
            images={[
              process.env.PUBLIC_URL + "/images/homeanimation/you.png",
              process.env.PUBLIC_URL + "/images/homeanimation/need.png",
              process.env.PUBLIC_URL + "/images/homeanimation/photos.png",
              process.env.PUBLIC_URL + "/images/homeanimation/like.png",
              process.env.PUBLIC_URL + "/images/homeanimation/this.png",
            ]}
            onFinish={handleSlideshowFinish}
          />
        </div>
      ) : (
        <>
          <div className="gallery-container">
            <Gallery />
          </div>
          <div className="text-container">
            <h1>
              You are one click away from world class pictures of your food and
              drinks
            </h1>
            <div className="quote-button">
              <a href="#quote" className="get-quote-button">
                Get a Quote
                <span className="button-background"></span>
                <span className="camera-icon"></span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
