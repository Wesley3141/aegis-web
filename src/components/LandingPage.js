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
          onClick={() => handleDownload('https://download847.mediafire.com/vo2jex2d1vtg0Lr9Rc1o8urzaA097A2zmasutqbYIv4GZHgvs0I45kQ_CiweYP7Q90YzRHcwaOnvXPUPV7hvf_vnRNy-Er1zMCHdEGGiJgyleC9No6VJc45iJWjo6MBY3hPR2bQctO7M1ZZTUXDpwztAFsnhe5-HijJb3g_Pd5AlUA/sgdjflrpypcq3qw/aegis-1.0.0-setup.exe')}
        >
          <i className="fab fa-windows"></i>
        </button>
        <button
          className="download-button mac"
          onClick={() => handleDownload('path/to/mac/file')}
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