import "./MoovieTile.css";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClipboard } from "@fortawesome/free-solid-svg-icons";

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
      <span className="float-tile web" onClick={openWebClick}>
        <FontAwesomeIcon icon={faEye} />
      </span>
      <span className="float-tile clip" onClick={openWebClick}>
        <FontAwesomeIcon icon={faClipboard} />
      </span>
      <h1>{text}</h1>
    </div>
  );
};

export default MoovieTile;
