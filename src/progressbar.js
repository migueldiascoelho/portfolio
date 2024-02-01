// CircularProgressBar.js
import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ centerImage, className }) => {
  return (
    <div className={`progress-bar ${className}`}>
      {/* Image in the center of the circular progress bar */}
      <img src={centerImage} alt="Center Image" className="center-image" />

      {/* Circular progress indicator */}
      <div className="progress-indicator"></div>
    </div>
  );
};

export {
  CircularProgressBar,
};