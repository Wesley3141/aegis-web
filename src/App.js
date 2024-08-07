import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LearnMorePage from './components/LearnMorePage';
import VersionsPage from './components/VersionsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />
        <Route path="/versions" element={<VersionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;