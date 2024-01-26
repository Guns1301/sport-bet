import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EventDetailsPage from './EventDetailsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/event/:eventId" exact element={<EventDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

