import React from 'react';
import './Features.css';
import { MdSearch } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { AiOutlineCloudDownload } from 'react-icons/ai';

function Features() {
  return (
    <section className="features">
      <h2>Why Choose BookFinder?</h2>
      <div className="feature-list">
        <div className="feature-card">
          <MdSearch size={40} className="feature-icon" />
          <h3>Smart Search</h3>
          <p>Find books instantly by title, author, or genre using our powerful search.</p>
        </div>
        <div className="feature-card">
          <FaBookOpen size={40} className="feature-icon" />
          <h3>Personalized Picks</h3>
          <p>Get recommendations tailored to your reading preferences.</p>
        </div>
        <div className="feature-card">
          <AiOutlineCloudDownload size={40} className="feature-icon" />
          <h3>Easy Access</h3>
          <p>Save books to your list and access them anywhere, anytime.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
