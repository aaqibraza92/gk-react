import React, { useState } from 'react';

const imageUrls = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1689631/tifo-painting2.jpg', 
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1689631/love-unite.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1689631/ta-smoke.jpg',
  // Add more image URLs as needed
];

function VerticalImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  return (
    <div className="vertical-image-slider">
      <button onClick={prevImage}>Previous</button>
      <img src={imageUrls[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default VerticalImageSlider;
