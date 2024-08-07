import React from 'react';
import './LearnMorePage.css';

const LearnMore = () => {
  return (
    <div className="learn-more-page">
      <h1 className="page-title">Discover Aegis</h1>
      <p className="description">
        Aegis is a sleek note-taking app with built-in Markdown support and a to-do list feature. Designed with a minimalist approach to keep you organized and focused.
      </p>
      <div className="features">
        <h2 className="features-title">Features</h2>
        <ul className="features-list">
          <li className="feature-item">Built-in Markdown Support for elegant text formatting.</li>
          <li className="feature-item">Integrated To-Do List to manage your tasks effortlessly.</li>
          <li className="feature-item">Minimalist Design for a distraction-free experience.</li>
          <li className="feature-item">Accessible from any modern web browser.</li>
        </ul>
      </div>
      <div className="call-to-action">
        <p>Experience the simplicity of <strong>Aegis</strong> today.</p>
        <a href="/" className="back-button">Back to Home</a>
      </div>
    </div>
  );
}

export default LearnMore;
