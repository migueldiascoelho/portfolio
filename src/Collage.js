// Collage.js

import React, { useState, useEffect } from 'react';

const Collage = ({ images }) => {
  const [randomizedImages, setRandomizedImages] = useState(images);

  const rearrangeImages = () => {
    const shuffledImages = [...randomizedImages].sort(() => Math.random() - 0.5);
    setRandomizedImages(shuffledImages);
  };

  useEffect(() => {
    // Initialize the collage with a random order when the component mounts
    rearrangeImages();

    // Automatically rearrange images every second
    const intervalId = setInterval(rearrangeImages, 200);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="collage">
      {randomizedImages.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Collage;
