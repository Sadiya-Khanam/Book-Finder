import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import booksImage from "../../assets/old-books-on-table-one-600nw-2323311409.webp";

function Hero() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (title) params.append("title", title);
    if (author) params.append("author", author);
    if (language) params.append("language", language);
    if (!params.toString()) return;
    navigate(`/results?${params.toString()}`);
  };

  return (
    <section className="hero">
      <div className="card hero-content">
        <h1>Find Your Next Favorite Book</h1>
        <p>Your reading journey starts here — explore thousands of books daily..</p>

        <form className="hero-search" onSubmit={handleSearch}>
          <div className="search-group">
            <button type="button" className="filter-btn">Title</button>
            <input
              type="text"
              placeholder="Book Title"
              className="hero-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="search-group">
            <button type="button" className="filter-btn">Author</button>
            <input
              type="text"
              placeholder="Author"
              className="hero-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="search-group">
            <button type="button" className="filter-btn">Language</button>
            <select
              className="hero-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">All</option>
              <option value="eng">English</option>
              <option value="fre">French</option>
              <option value="ger">German</option>
              <option value="hin">Hindi</option>
              <option value="spa">Spanish</option>
              <option value="ita">Italian</option>
            </select>
          </div>

          <div className="button-wrapper">
            <button type="submit" className="hero-btn">Find Book</button>
          </div>
        </form>
      </div>

      <div className="hero-image-container">
        <img src={booksImage} alt="Books" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
