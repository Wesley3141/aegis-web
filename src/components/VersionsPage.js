import React from 'react';
import { Link } from 'react-router-dom';
import './VersionsPage.css';

const VersionsPage = () => {
  return (
    <div className="versions-page">
      <Link to="/" className="back-arrow">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h2 className="versions-title">Versions</h2>
      <div className="version-item">
        <h3 className="version-number">Version 1.0</h3>
        <p className="version-date">Released on: August 4, 2024</p>
        <ul className="feature-list">
          <li>Transparent background for mac users</li>
          <li>Additional markdown support</li>
          <li>Improved performance</li>
          <li>Bug fixes and optimizations</li>
        </ul>
      </div>
      {/* Add more version items as needed */}
    </div>
  );
}

export default VersionsPage;