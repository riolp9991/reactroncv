import "./DetailsImages.css";
import { useState } from "react";

const DetailsImages = ({ images = [] }) => {
  const [viewIndex, setIndex] = useState(0);

  return (
    <div className="moovie-details-image-container">
      <div className="main-image">
        <img src={images[viewIndex].link} alt="" />
      </div>
      <div className="images-list">
        {images.map((value, index) => {
          return (
            <div onClick={() => setIndex(index)} className="img-container">
              <img src={value.link} alt={value.fixedText} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsImages;
