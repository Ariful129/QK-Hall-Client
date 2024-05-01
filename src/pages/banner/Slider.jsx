import { useState, useEffect } from 'react';

import img2 from '../../assets/b1.jpg';
import img1 from '../../assets/b2.jpg';
import img3 from '../../assets/b3.jpg';
import img4 from '../../assets/ban1.jpg';
import img5 from '../../assets/ban2.jpg';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3,img4,img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page-banner  bg-slate-100   mt-4">
      
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        className="w-full  h-[600px] "
      />

           {/* <h1 className="text-3xl font-bold  absolute    left-1/2 top-1/2">Welcome to Our Website</h1> */}
    </div>
  );
};

export default Slider;
