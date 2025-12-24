import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import PoliciesPage from './pages/PoliciesPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

