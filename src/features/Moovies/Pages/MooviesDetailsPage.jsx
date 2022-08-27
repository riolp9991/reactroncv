import "./MoovieDetails.css";
import { FlatLink } from "../../../components/FlatButton";
import MoovieDetailNav from "../Components/MoovieDetailNav/MoovieDetailNav";
import { useEffect, useState } from "react";
import { findById } from "../../../database/comunicators/moovies/moovies.render";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MooviesDetailsPage = (props) => {
  const moovieId = useSelector((state) => state.moovies.currentMoovieID);
  const [moovieTitle, setMoovieTitle] = useState("");
  const [moovieLink, setMoovieLink] = useState("");
  const params = useParams();
  const paramsId = params.id;

  const findTheMoovie = async () => {
    console.log({ moovieId });
    const data = await findById(paramsId);
    console.log({ data });
    setMoovieTitle(data.dataValues.title);
    setMoovieLink(data.dataValues.link);
  };

  useEffect(() => {
    findTheMoovie();
  }, [moovieId, paramsId]);

  return (
    <>
      <MoovieDetailNav title={moovieTitle} link={moovieLink} />
    </>
  );
};

export default MooviesDetailsPage;
