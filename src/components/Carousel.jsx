// import { useState } from "react";
// import "./Carousel.css";
// import CarouselImg1 from "../assets/1.png";
// import CarouselImg2 from "../assets/2.png";
// import CarouselImg3 from "../assets/3.png";

// const images = [CarouselImg1, CarouselImg2, CarouselImg3];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="carousel-container py-20 px-5 w-full bg-white">
//       <div className="relative">
//         <button className="carousel-button left" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <div
//           className="carousel-wrapper"
//           style={{ transform: translateX(-`${currentIndex * 100}%`) }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt="image"
//               className="carousel-image"
//             />
//           ))}
//         </div>
//         <button className="carousel-button right" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//       <div className="carousel-dots">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={
//               carousel - dot`${index === currentIndex ? "active" : ""}`
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import { useState } from "react";
import "./Carousel.css";
import CarouselImg1 from "../assets/1.png";
import CarouselImg2 from "../assets/2.png";
import CarouselImg3 from "../assets/3.png";

const images = [CarouselImg1, CarouselImg2, CarouselImg3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container py-20 px-5 w-full bg-white">
      <div className="relative">
        <button className="carousel-button left" onClick={prevSlide}>
          &#10094;
        </button>
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
