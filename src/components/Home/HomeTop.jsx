import React from 'react';
import './HomeTop.css';

function HomeTop() {


  return (
    <div>

      <div className="container">
        <div className="writing-section">
          <h1 className="heading-animation">Welcome to SwiftPeek</h1>
          <p className="paragraph-animation">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="easy-buttons">
            <button><h6>HIRE</h6></button>
            <button><h6>CONNECT</h6></button>
          </div>
        </div>

        <div className="animation-section">
          <div className="stars-container">
            <div className="star-1"><ion-icon name="star"></ion-icon></div>
            <div className="star-2"><ion-icon name="star"></ion-icon></div>
            <div className="star-3"><ion-icon name="star"></ion-icon></div>
          </div>
        </div>
      </div>

      

      

    </div>
  );
}

export default HomeTop;
