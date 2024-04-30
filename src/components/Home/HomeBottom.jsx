import React, { useState, useEffect, useRef }  from 'react'
import './HomeBottom.css'

function HomeBottom() {

    // Add a state to track scroll position
const videoRef = useRef(null);



// Inside the useEffect for video playback
useEffect(() => {
  const videoElement = videoRef.current;
  if (videoElement) {
    videoElement.play().catch(error => {
      // Autoplay was prevented
      console.error('Autoplay was prevented:', error);
    });

    videoElement.addEventListener('ended', () => {
      // Loop the video when it ends
      videoElement.play();
    });
  }
}, []);

  const [scrollDirection, setScrollDirection] = useState('none'); // 'up', 'down'
  const [panelPositions, setPanelPositions] = useState({
    topPanelTranslate: -2,
    bottomPanelTranslate: 2,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 450 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 1,
          bottomPanelTranslate: -1,
        });
      } else if (scroll < 450 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -1,
          bottomPanelTranslate: 1,
        });
      }

      if (scroll > 500 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 2,
          bottomPanelTranslate: -2,
        });
      } else if (scroll < 500 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -2,
          bottomPanelTranslate: 2,
        });
      }

      if (scroll > 550 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 0,
          bottomPanelTranslate: -3,
        });
      } else if (scroll < 550 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -3,
          bottomPanelTranslate: 3,
        });
      }

      if (scroll > 600 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 4,
          bottomPanelTranslate: -4,
        });
      } else if (scroll < 600 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -1,
          bottomPanelTranslate: 4,
        });
      }

      if (scroll > 650 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 5,
          bottomPanelTranslate: -5,
        });
      } else if (scroll < 650 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -5,
          bottomPanelTranslate: 5,
        });
      }

      if (scroll > 700 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 6,
          bottomPanelTranslate: -6,
        });
      } else if (scroll < 700 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -6,
          bottomPanelTranslate: 6,
        });
      }

      if (scroll > 750 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 6,
          bottomPanelTranslate: -6,
        });
      } else if (scroll < 750 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -6,
          bottomPanelTranslate: 6,
        });
      }

      if (scroll > 800 && scrollDirection !== 'down') {
        setScrollDirection('down');
        setPanelPositions({
          topPanelTranslate: 3,
          bottomPanelTranslate: -7,
        });
      } else if (scroll < 800 && scrollDirection !== 'up') {
        setScrollDirection('up');
        setPanelPositions({
          topPanelTranslate: -10,
          bottomPanelTranslate: 10,
        });
      }


    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <div>
      <div className="work-panel">
        <h1></h1>
        <div className="top-panel" style={{ transform: `translateX(${panelPositions.topPanelTranslate}%)`, transition: 'transform 0.7s ease-in-out' }}>
          <div className="panel"><video src="./assets/dennis.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/bishop.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/ans.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/one-nil.mp4" ref={videoRef} autoPlay muted loop></video></div>
        </div>

        <div className="bottom-panel" style={{ transform: `translateX(${panelPositions.bottomPanelTranslate}%)`, transition: 'transform 0.7s ease-in-out'  }}>
          <div className="panel"><video src="./assets/dennis-2.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/one-nil.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/fabric.mp4" ref={videoRef} autoPlay muted loop></video></div>
          <div className="panel"><video src="./assets/bishop.mp4" ref={videoRef} autoPlay muted loop></video></div>
        </div>

        <button><h4>MORE WORK</h4></button>
      </div>
    </div>
  )
}

export default HomeBottom