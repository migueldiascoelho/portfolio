import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import saintmikeLogo from './graphics/saintmikeLogo.png';
import saintmikeChannel from './graphics/saintmikeChannel.png';

const commentsContext = require.context('./graphics/comments', false, /\.(png|jpe?g|svg)$/);
const commentImages = commentsContext.keys().map(commentsContext);

const SaintMike2 = () => {
  const [commentIndex, setCommentIndex] = useState(0);
  const [visibleComment, setVisibleComment] = useState(commentImages[0]);
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    const transitionTime = 1000; // 1 second

    const transitionComment = () => {
      isTransitioningRef.current = true;
      setTimeout(() => {
        isTransitioningRef.current = false;
        setCommentIndex((prevIndex) => (prevIndex + 1) % commentImages.length);
      }, transitionTime);
    };

    const intervalId = setInterval(() => {
      if (!isTransitioningRef.current) {
        setVisibleComment(commentImages[commentIndex]);
        transitionComment();
      }
    }, transitionTime * 2); // 2-second interval between comments

    return () => clearInterval(intervalId);
  }, [commentIndex]);

  // Add a function to open the YouTube channel when the image is clicked
  const openYouTubeChannel = () => {
    window.open('https://www.youtube.com/@prod.saintmike', '_blank'); // Replace with your actual YouTube channel URL
  };

  return (
    <div>
      <p className="saintmike-text">
        Back in 2020, an industry professional told me that it took 4 times as much effort to be successful in music as it did to be successful in Finance. I thought about it for a second but then decided to go ahead with my project anyway.
      </p>
      <p className="saintmike-text">
      In early 2021, Saint Mike Instrumentals was born and, since then, everything that the project accomplished was due to hard work and consistent creativity.
      </p>
      <p className="saintmike-text">
        3 years later, with more than 20 000 Youtube subscribers, a profitable business that adapts well to trends, +1,000 song credits among which: collaborations with renowned artists like "Violent Vira", "Slump6s", "Tana", or "Sqwore", as well as close contact with other Major Artists, and even events like the Vancouver Fashion Week S/S 2023, I feel like the effort was well worth it!
      </p>
      <p className="saintmike-text">
        The main thing is that I was able to prove myself that with a plan and hard work all goals are within reach.
      </p>
      <img src={saintmikeLogo} alt="Saint Mike Logo" className="saintmike-logo" />
      {/* Wrap the image with an anchor tag */}
      <a href="#" onClick={openYouTubeChannel}>
        <img src={saintmikeChannel} alt="Saint Mike Channel" className="saintmike-channel" />
      </a>
      <div className="comment-container">
        <img src={visibleComment} alt={`Comment ${commentIndex + 1}`} className="comment-image" />
      </div>
      <p className='feedback'>Recent Feedback:</p>
    </div>
  );
};

export default SaintMike2;
