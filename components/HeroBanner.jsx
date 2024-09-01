import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';
import Image from 'next/image';

const HeroBanner = ({ heroBanner }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Scroll to the middle of the page
    window.scrollTo({
      top: document.body.scrollHeight / 5.5,
      behavior: 'smooth'
    });
  };

  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image' />
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          {heroBanner.buttonText}
        </button>
      </div>
      <div className='desc'>
        <h5>Description</h5>
        <p>{heroBanner.desc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
