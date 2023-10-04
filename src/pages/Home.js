import React, { useState } from "react";
import "../stylesheets/Home.css";
import Gallery from "../components/Gallery";
import Slideshow from "../components/Slideshow";

function Home() {
  const [showReplacement, setShowReplacement] = useState(false);

  const handleSlideshowFinish = () => {
    // Slideshow finished, show the replacement component
    setShowReplacement(true);
  };

  return (
    <div className="home">
      {!showReplacement ? (
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
      ) : (
        <div className="gallery-container">
          <Gallery />
        </div>
      )}
    </div>
  );
}

export default Home;
