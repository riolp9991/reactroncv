import "./MoovieDetails.css";
import { FlatLink } from "../../../components/FlatButton";
import MoovieDetailNav from "../Components/MoovieDetailNav/MoovieDetailNav";
import { useEffect } from "react";
import { findById } from "../../../database/comunicators/moovies/moovies.render";
import { useSelector } from "react-redux";

const MooviesDetailsPage = (props) => {
  const moovieId = useSelector((state) => state.moovies.currentMoovieID);

  const findTheMoovie = async () => {
    const data = await findById(4);
    console.log({ data });
  };

  useEffect(() => {
    findTheMoovie();
  }, [moovieId]);

  return (
    <>
      <MoovieDetailNav />
    </>
  );
};

export default MooviesDetailsPage;
