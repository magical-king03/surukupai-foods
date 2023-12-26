import React, { useState, useEffect } from 'react';
import img1 from '../img/1.png'
import img2 from '../img/2.png'

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {p: img1, a: "#"},
    {p: img2, a: "#"},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }

  return (
    <div className="relative w-full">
      <div className='overflow-hidden'>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <a href={image.a}>
            <img src={image.p} className="w-full h-full object-cover rounded-lg" />
            </a>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &gt;
      </button>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-white w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &gt;
      </button>
    </div>
    </div>
  );
}

export default Carousel;