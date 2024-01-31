import React from 'react';
import Navbar from '../component/Navbar';
import Footer from './Footer';
import Internship from './Internship';
import abc from './abc';
import Blog from './Blog';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Home = () => {
  const handleButtonClick = () => {
    // Handle button click logic
  };

  return (
    <div>
      <Navbar />
      <h2>Home Page</h2>
      <div className="container">
        <div className="home-container">
          <div className="banner-slider">
            <div className="banner-left">
            <Internship />
              
            </div>
            <div className="banner-right">
              <Swiper
                className="swiper-initialized swiper-horizontal swiper-pointer-events mySwiper1 swiper-backface-hidden"
                spaceBetween={0}
                slidesPerView={1}
                navigation
                loop
                autoplay={{ delay: 3000 }}
                effect="slide"
              >
                <SwiperSlide>
                 <h2>Let Us Help with Your Business IT Needs</h2>
          <p>
            We are one of its kind of product development company that offers
            competitive software solutions to unleash your business potential. We
            are helping brands to navigate through their digital transformation
            journey.
          </p>

          <h2>Maintain your Business Website/App with Us at</h2>
          <p class="text-left">
            A better digital experience for your customers and staff is made possible by always-on managed services and support.
          </p>


          <h2>Create your E-Commerce Website with Us at</h2>
          <p class="text-left">
            A successful and highly effective E-Commerce website needs a few essential components. Here, we'll decipher it for you.
          </p>
                </SwiperSlide>
                
                <SwiperSlide>
                
                </SwiperSlide>
               
              </Swiper>
            
          </div>
        </div>
 
        <div>
        
        </div>
        </div>
        <div className="sec2">
         </div>
         <div className='text-container'>
         <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Let Us Help with Your Business IT Needs</h1>
         <h4>We are one of its kind of product development company that offers competitive software solutions to unleash your business potential. we are helping brands to navigate through their digital transformation journey.</h4>
       </div>   
<div>
          <div className="sec2-right aos-init" data-aos="fade-right">
            <img
              src="/static/media/who-we-are.dc991326d7948dcb8459.webp"
              alt="We are a full service digital consultant with the skills and ability to serve the requirements of even the biggest and most complicated businesses worldwide. To ensure that we focus on their needs and customers and provide real value to the business, we can provide clients with the greatest possible experiences while working with our team, thanks to our available services portfolio. Endless ideas, end-to-end services."
            />
          </div>
          <div className="sec2-left aos-init" data-aos="fade-left">
            <h2 className="heading">Who We Are ?</h2>
            <p>
              We are a full service{' '}
              <a
                className="link"
                href="https://maxgentechnologies.com/services"
                target="_blank"
                rel="noopener noreferrer"
              >
                digital consultant
              </a>{' '}
              with the skills and ability to serve the requirements of even the biggest and most complicated businesses worldwide. To ensure that we focus on their needs and customers and provide real value to the business, we can provide clients with the greatest possible experiences while working with our team, thanks to our available services{' '}
              <a
                className="link"
                href="https://maxgentechnologies.com/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                portfolio
              </a>
              . Endless ideas, end-to-end services.
            </p>
          </div>
        </div>

        
        
       
        <abc />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
