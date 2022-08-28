import "./MoovieDetails.css";

import { scrapMoovieData } from "../../../../database/comunicators/moovies/moovies.render";
import { useEffect } from "react";

const MoovieDetails = ({ link = "" }) => {
  const scrapDatta = async () => {
    console.log("SCRAP DATA");
    const fetchedData = await scrapMoovieData(link);
    console.log({ data: fetchedData });
  };

  useEffect(() => {
    scrapDatta();
  }, [link]);

  return (
    <div className="moovie-details-container">
      <h1>Hola mundo</h1>
    </div>
  );
};

export default MoovieDetails;
