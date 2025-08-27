import React, { useState } from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
