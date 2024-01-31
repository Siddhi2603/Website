import React from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageGallery = () => {

  AOS.init();

  return (
    <div className="imgs">
      <span className="img-main" data-aos="flip-right">
        <img src="https://maxgentechnologies.com/static/media/identify.219126398168db4b4b3f.webp" alt="Identify" />
        <p className="img-sub">Identify</p>
      </span>

      <span className="img-main" data-aos="flip-right">
        <img src="https://maxgentechnologies.com/static/media/impliment.d416a34bb4e2a2baf525.webp" alt="Implement" />
        <p className="img-sub">Implement</p>
      </span>

      <span className="img-main" data-aos="flip-right">
        <img src="https://maxgentechnologies.com/static/media/manage.f0f1050eda4b0efef814.webp" alt="Manage" />
        <p className="img-sub">Manage</p>
      </span>
    </div>
  );
};

export default ImageGallery;
