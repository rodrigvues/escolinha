import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Profissionais.css';

import imageblock1 from '../assets/1.jpeg';
import imageblock2 from '../assets/2.jpeg';
import imageblock3 from '../assets/3.jpeg';
import imageblock4 from '../assets/4.jpeg';
import imageblock5 from '../assets/5.jpeg';
import imageblock6 from '../assets/6.jpeg';

const Profissionais = () => {
  const [spaceBetween, setSpaceBetween] = useState(20); // Default spacing for larger screens
  const [slidesPerView, setSlidesPerView] = useState(3); // Default slides per view

  // Update spaceBetween based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSpaceBetween(300); // More spacing on small screens
      } else {
        setSpaceBetween(20); // Default spacing on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update slidesPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSlidesPerView(1); // Only show 1 slide on small screens
      } else if (window.innerWidth < 1050 && window.innerWidth > 800) {
        setSlidesPerView(2); // Only show 1 slide on small screens
      } else {
        setSlidesPerView(3); // Show 3 slides on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="espaco" className="profissionais-section">
      <h2 className="section-title">Nosso Espaço</h2>
      <p className='services-subtitle'>Deslize para ver imagens</p>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 1,
          },
        }}
      >
        {[imageblock1, imageblock2, imageblock3, imageblock4, imageblock5, imageblock6].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-block">
              <img src={image} alt={`Espaço ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Profissionais;
