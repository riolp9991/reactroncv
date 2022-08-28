import "./DetailsImages.css";

const DetailsImages = ({ images = [] }) => {
  return (
    <div className="moovie-details-image-container">
      <div className="main-image">
        <img src={images[0].link} alt="" />
      </div>
      <div className="images-list">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <div className="img-container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsImages;
