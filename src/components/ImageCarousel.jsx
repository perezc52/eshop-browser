import { useState } from 'react';

function ImageCarousel({ imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  }

  return (
    <div className="image-carousel">
      <div className="image-carousel__image-container">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className={`image-carousel__image ${
              index === currentIndex ? 'image-carousel__image--active' : ''
            }`}
          />
        ))}
      </div>
      <div className="image-carousel__controls">
        <button className="image-carousel__control" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="image-carousel__control" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel
