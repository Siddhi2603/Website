import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideInterval = 3000; // Time in milliseconds for each slide

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const imageUrls = [
    'https://maxgentechnologies.com/static/media/Websites-maintainence-services.fe266da1f6125e1c8340.webp',
    'https://maxgentechnologies.com/static/media/Logo-and-graphic-design.6628b8666a7ab073fd7f.webp',
    'https://maxgentechnologies.com/static/media/seo-and-digital-marketing.78d978d384752252222d.webp',
  ];

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {imageUrls.map((url, index) => (
            <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
              <img className="d-block w-55" src={url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
     

     
       

      
          
          
        
    
   
      </div>
    </div>
  );
};

export default Carousel;
