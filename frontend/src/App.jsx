import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import loaderGif from './assets/images/loader.gif'; // Adjust the path accordingly
import Footer from './components/Footer/Footer';
import About from './components/About/About';

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
          <Hero />
          <Services />
          <Footer/>
        </>
      )}
    </>
  );
};

export default App;
