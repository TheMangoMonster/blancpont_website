import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to BlancPont</h1>
          <p>Your Destination for Exquisite Culinary Photography</p>
          <Link to="/portfolio" className="cta-button">
            Explore Our Portfolio
          </Link>
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At BlancPont, we specialize in capturing the beauty of food through
            the lens. Our team of talented photographers creates stunning,
            mouthwatering images that will leave your audience hungry for more.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service-card">
            <img
              src={process.env.PUBLIC_URL + "/images/service1.jpg"}
              alt="Service 1"
            />
            <h3>Food Photography</h3>
            <p>
              We offer professional food photography services for restaurants,
              cafes, and food brands. Let us make your dishes look irresistible.
            </p>
          </div>
          <div className="service-card">
            <img
              src={process.env.PUBLIC_URL + "/images/service2.jpg"}
              alt="Service 2"
            />
            <h3>Recipe Book Photography</h3>
            <p>
              Creating a recipe book? Our photographers can bring your recipes
              to life with stunning visuals.
            </p>
          </div>
          <div className="service-card">
            <img
              src={process.env.PUBLIC_URL + "/images/service3.jpg"}
              alt="Service 3"
            />
            <h3>Menu Photography</h3>
            <p>
              Impress your customers with high-quality menu photos that showcase
              your culinary creations.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>
            Ready to elevate your food presentation? Contact us today to discuss
            your project or request a quote.
          </p>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
