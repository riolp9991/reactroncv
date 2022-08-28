import "./MoovieDetails.css";

import { scrapMoovieData } from "../../../../database/comunicators/moovies/moovies.render";
import { useEffect, useState } from "react";
import DetailsImages from "../DetailsImages/DetailsImages";

const MoovieDetails = ({ link = "" }) => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [imagesVisible, setImagesVisible] = useState(false);

  const scrapDatta = async () => {
    console.log("SCRAP DATA");
    const fetchedData = await scrapMoovieData(link);
    console.log({ data: fetchedData });
    setData(fetchedData);
  };

  console.log(images);

  useEffect(() => {
    scrapDatta();
  }, [link]);

  useEffect(() => {
    if (!data.links) return;
    console.log("FILTERING IMAGES");
    let images = data.links.filter((value) => {
      const text = value.fixedText;
      const isImage = text.includes(".jpg") || text.includes(".png");
      return isImage;
    });
    if (images.length > 3) images = images.slice(0, 3);
    setImages(images);
  }, [data]);

  console.log({ images });

  const showImages =
    images.length > 0 ? <DetailsImages images={images} /> : <></>;

  return (
    <div className="moovie-details-container">
      <h1>Hola mundo</h1>
      <div className="details">
        <div className="section">{showImages}</div>
        <div className="section"></div>
      </div>
    </div>
  );
};

export default MoovieDetails;
