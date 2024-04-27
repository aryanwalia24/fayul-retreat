import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from './components/page1/MainSection';
import BookNow from './components/page2/BookNow';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/booknow" element={<BookNow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
