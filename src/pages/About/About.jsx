import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>About Book Finder</h1>
        <p>Your favorite books are just a search away!</p>
      </div>

      <div className="about-container">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Book Finder is a platform to help you search and discover books from different genres and authors.
            Our goal is to make it easier for readers to find books they love.
          </p>
        </div>

        <div className="about-section vision-mission">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To create a world where every reader can find the perfect book effortlessly.</p>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>To provide an easy-to-use platform that connects readers with books from every genre and author.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

