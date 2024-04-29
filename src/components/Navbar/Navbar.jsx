import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode !== null) {
      setIsLightMode(savedMode === 'light');
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    localStorage.setItem('mode', newMode ? 'light' : 'dark');
  };

  const applyModeStyles = () => {
    const body = document.body;
    const navbarBrand = document.querySelector('.navbar .brand');
    const navbarSections = document.querySelector('.navbar .navbar-sections');
  
    body.classList.toggle('dark-mode', !isLightMode);
    body.style.backgroundColor = isLightMode ? '#F0E9D2' : '#000000';
    document.documentElement.style.setProperty('--text-color', isLightMode ? '#000000' : '#F0E9D2');
    document.documentElement.style.setProperty('--icon-color', isLightMode ? '#000000' : '#F0E9D2');
  
    navbarBrand.style.backgroundColor = isLightMode ? 'rgba(255, 255, 255, 0.7)' : '#F0E9D2';
    navbarSections.style.backgroundColor = isLightMode ? 'rgba(255, 255, 255, 0.7)' : '#F0E9D2';
  };
  

  useEffect(() => {
    applyModeStyles();
  }, [isLightMode]);

  return (
    <div>
      <div className={`navbar ${isLightMode ? 'light-mode' : 'dark-mode'}`}>

        <div className="brand">
          <img src="./assets/swiftpeak.jpg" alt="logo.jpg" />
          <h4>SwiftPeek</h4>
        </div>

        <div className="navbar-sections">
          <Link to="/"><h6>Home</h6></Link>
          <h6>Work</h6>
          <Link to="/swiftpeek-services"><h6>Services</h6></Link>
          <h6>Team</h6>
          <h6>Contact</h6>
        </div>

        <div className="mode" >
          <div onClick={toggleMode}>
            {isLightMode ? (<ion-icon name="sunny-outline" style={{ color: 'var(--icon-color)' }}></ion-icon>) : 
              (<ion-icon name="moon" style={{ color: 'var(--icon-color)' }}></ion-icon>)}
          </div>
        </div>

        <div className="mode-small" >
          <div onClick={toggleMode}>
            {isLightMode ? (
              <ion-icon name="sunny-outline" style={{ color: 'var(--icon-color)' }}></ion-icon>) : 
              (<ion-icon name="moon" style={{ color: 'var(--icon-color)' }}></ion-icon>)}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;

