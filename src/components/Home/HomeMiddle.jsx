import React, {useState, useEffect} from 'react'
import './HomeMiddle.css'

function HomeMiddle() {
const [scrollPosition, setScrollPosition] = useState(0);
// Update scroll event listener to track scroll position
useEffect(() => {
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
// Calculate animation class based on scroll position
const getAnimationClass = () => {
  return scrollPosition > 200 ? 'raindrop-animation' : '';
};
  return (
    <div>
      <div className="glimpse-container">
        <div className="glimpse-animation">
          <h5>SWIFTPEEK</h5>
          <h5>SWIFTPEEK</h5>
          <h5>SWIFTPEEK</h5>
        </div>
        <div className={`glimpse-description ${getAnimationClass()}`}>
          <h1>Creating next level digital products</h1>
        </div>
      </div>
    </div>
  )
}

export default HomeMiddle