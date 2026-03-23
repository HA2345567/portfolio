import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { Projects } from './pages/Projects';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
