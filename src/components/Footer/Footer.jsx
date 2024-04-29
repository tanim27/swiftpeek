import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
  const slashRef = useRef(null);
  const motoRef = useRef(null);
  const connectionRef = useRef(null); // Ref for .connection element
  const [showSlash, setShowSlash] = useState(false);
  const [showMoto, setShowMoto] = useState(false);
  const [showConnection, setShowConnection] = useState(false); // State for .connection visibility

  useEffect(() => {
    const handleScroll = () => {
      const footerContainer = document.querySelector('.footer-container');
      const slashElement = slashRef.current;
      const motoElement = motoRef.current;
      const connectionElement = connectionRef.current;

      if (!footerContainer || !slashElement || !motoElement || !connectionElement) return;

      const footerContainerTop = footerContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerContainerTop < windowHeight && !showSlash) {
        setShowSlash(true);
      } else if (footerContainerTop >= windowHeight && showSlash) {
        setShowSlash(false);
      }

      const motoElementTop = motoElement.getBoundingClientRect().top;

      if (motoElementTop < windowHeight && !showMoto) {
        setShowMoto(true);
      } else if (motoElementTop >= windowHeight && showMoto) {
        setShowMoto(false);
      }

      const connectionElementTop = connectionElement.getBoundingClientRect().top;

      if (connectionElementTop < windowHeight && !showConnection) {
        setShowConnection(true);
      } else if (connectionElementTop >= windowHeight && showConnection) {
        setShowConnection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showSlash, showMoto, showConnection]);

  return (
    <div>
      <div className="footer-container">

        <div className="footer">
          <h1 ref={motoRef} className={`moto ${showMoto ? 'show-moto' : ''}`}>Let's collaborate for success</h1>
          <div className="partition">
            <h3 ref={slashRef} className={`slash ${showSlash ? 'show-slash' : ''}`}>/</h3>
            <div ref={connectionRef} className={`connection ${showConnection ? 'show-connection' : ''}`}>
              <button><p>Make a connection.</p></button>
            </div>
          </div>
        </div>

        <div className="credit-section">
          <div className="local-time">Time</div>

          <div className="social-section">
            <div><h6>Figma</h6></div>
            <div><h6>Github</h6></div>
            <div><h6>Instagram</h6></div>
            <div><h6>Twitter</h6></div>
            <div><h6>LinkedIn</h6></div>
          </div>

          <div className="credits"> 
            <div>2024@Edition - SwiftPeek</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
