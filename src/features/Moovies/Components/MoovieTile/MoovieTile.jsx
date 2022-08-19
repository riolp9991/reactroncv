import "./MoovieTile.css";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const MoovieTile = ({
  text = "Nombre de la pelicula",
  link = "/",
  year = new Date().getFullYear(),
}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(link);
  };

  const openWebClick = (e) => {
    e.stopPropagation();
    console.log(`Clicked ${text} eye Icon`);
  };

  return (
    <div className="moovie-tile" onClick={redirect}>
      <span className="year">{year}</span>
      <span className="openWeb" onClick={openWebClick}>
        <FontAwesomeIcon icon={faEye} />
      </span>
      <h1>{text}</h1>
    </div>
  );
};

export default MoovieTile;
