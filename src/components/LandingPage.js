import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="landing-page">
      <h1 className="landing-title">Aegis</h1>
      <a href="https://wesleydeklich.me" target="_blank" rel="noopener noreferrer" className="author">
        By Wesley D
      </a>
      <div className="buttons">
        <button
          className="download-button windows"
          onClick={() => handleDownload('https://drive.google.com/uc?export=download&id=1vPq0stx-O_kFBkcwLqqp1lhfx8GH2AYH')}
        >
          <i className="fab fa-windows"></i>
        </button>
        <button
          className="download-button mac"
          onClick={() => handleDownload('https://drive.google.com/uc?export=download&id=1kUPsCaurC0HgFaU3juLG58EqKyiig3CO')}
        >
          <i className="fab fa-apple"></i>
        </button>
      </div>
      <div className="learn-more-container">
        <Link to="/learn-more" className="learn-more-button">
          Learn More
        </Link>
        <span className="separator">•</span>
        <Link to="/versions" className="versions-button">
          Versions
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
