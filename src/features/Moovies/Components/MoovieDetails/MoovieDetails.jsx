import "./MoovieDetails.css";

import { scrapMoovieData } from "../../../../database/comunicators/moovies/moovies.render";
import MoovieDetailsInfo from "./MoovieDetailsInfo/MoovieDetailsInfo";
import { useEffect, useState } from "react";
import DetailsImages from "../DetailsImages/DetailsImages";
import WebFolders from "../../../../components/WebFolders/WebFolders";

const MoovieDetails = ({ link = "" }) => {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrapDatta = async () => {
    console.log("SCRAP DATA");
    const fetchedData = await scrapMoovieData(link);
    console.log({ data: fetchedData });
    setData(fetchedData);
    setLoading(false);
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

  const moovieDetails = data?.info?.movie ? (
    <MoovieDetailsInfo moovieData={data.info.movie} />
  ) : !loading ? (
    <h1 className="darkened-text">
      No se ha encontrado un archivo .nfo en el directorio para mostrar los
      datos de la pelicula
    </h1>
  ) : (
    <></>
  );

  const loadingText = loading ? (
    <h1 className="movie-details-loading">
      Cargando, por favor espere un momento
    </h1>
  ) : (
    <></>
  );

  return (
    <div className="moovie-details-container">
      {loadingText}
      <div className="details">
        <div className="section">{showImages}</div>
        <div className="section">
          <div className="info">{moovieDetails}</div>
        </div>
      </div>
      <span className="separator"></span>
      <h1 className="subtitle">Contenido de la carpeta</h1>
      <WebFolders link={link} />
      <span className="separator"></span>
    </div>
  );
};

export default MoovieDetails;
