import React from "react";

const CarouselImageGenerator = ({ text }) => {
  // Replace 'image-url.jpg' with the actual URL or path to your image.
  const imageUrl = `https://source.unsplash.com/random/1920×1080/?${text}`;
  return (
    <div>
      <img src={imageUrl} alt={text} className="w-100 d-block" style={{ maxHeight: "500px" ,filter:"brightness(50%)"}} />
    </div>
  );
};

export default CarouselImageGenerator;
