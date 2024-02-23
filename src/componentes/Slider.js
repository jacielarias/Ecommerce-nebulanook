import '../style sheet/Slider.css';
import React, { useState } from 'react';
import next from '../imagenes/arrow-right.svg';
import prev from '../imagenes/arrow-left.svg';
//Imágenes
import slide0 from '../imagenes/slide0.jpg'
import slide1 from '../imagenes/slide1.jpg';
import slide2 from '../imagenes/slide2.jpg';
import slide3 from '../imagenes/slide3.jpg';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeDot, setActiveDot] = useState(0)
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      setActiveDot((prevDot) => (prevDot === slides.length - 1 ? 0 : prevDot + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      setActiveDot((prevDot) => (prevDot === 0 ? slides.length - 1 : prevDot - 1));
    };

    function slideDots(id){
      setCurrentSlide(id);
      setActiveDot(id);
    }
  

    //Slider
    const slides = [
      {
        id: 0,
        url: slide0,
        text: 'Your Style, Your Voice',
        description: 'Find the Collection that Speaks for You',
      },
      {
        id: 1,
        url: slide1,
        text: 'Best Clothing Products',
        description: 'Men and Women',
      },
      {
        id: 2,
        url: slide2,
        text: 'Best Quallity Items',
        description: 'The best Accesories Just For You',
      },
      {
        id: 3,
        url: slide3,
        text: 'Everything you neeed',
        description: 'to be fashionable',
      },
    ];

    return (
      <div id='slider'>
        <div className='prev-button slider-button' onClick={prevSlide}><img src={prev} /></div>
        <div className='slide-content'>
        <img className='slide-image' src={slides[currentSlide].url} key={currentSlide + 1} alt={`Slide ${currentSlide + 1}`} />
          <p className='slide-text'>{slides[currentSlide].text}</p>
          <p className='slide-description'>{slides[currentSlide].description}</p>
          <h2 className='slide-index'>{currentSlide < 9 ? `0${currentSlide + 1}` : currentSlide + 1}</h2>
        </div>
        <div className='next-button  slider-button' onClick={nextSlide}><img src={next}/></div>
        <div className='slide-dots'>
            {slides.map((dot, i)=>(
              <div className={`dot ${i === activeDot ? 'active' : ''}`} key={dot.url} onClick={()=> slideDots(i)}></div>
            ))}
        </div>
      </div>
    );
  };

  export default Slider;

