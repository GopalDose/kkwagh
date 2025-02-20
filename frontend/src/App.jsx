import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';
import LeaseMarket from './components/LeaseMarket/LeaseMarket';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import loaderGif from './assets/images/loader.gif';
import Home from './pages/Home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader-container">
          <img src={loaderGif} alt="Loading..." className="loader-gif" />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lease-market" element={<LeaseMarket />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
