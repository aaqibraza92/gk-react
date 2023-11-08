import React, { useState, useEffect } from 'react';

const images = [
    'https://images.pexels.com/photos/4676396/pexels-photo-4676396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9992332/pexels-photo-9992332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9992330/pexels-photo-9992330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // Add more image URLs as needed
  ];

const FadeSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
    
  return (
    <div className="fade-slider">
        {
            images.map((image, index)=>(
                <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`img-fluid slider-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))
        }
    </div>
  )
}

export default FadeSlider