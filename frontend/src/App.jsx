import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import loaderGif from './assets/images/loader.gif'; // Adjust the path accordingly
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import LeaseMarket from './components/LeaseMarket/LeaseMarket';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (optional)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loaderGif} alt="Loading..." className="loader-gif" />
        </div>
      ) : (
        <>
          {/* <Hero />
          <Services />
          <About/>
          <Footer/> */}
          {/* <LeaseMarket/> */}
          <Dashboard/>
          {/* <Registration/> */}
        </>
      )}
    </>
  );
};

export default App;
