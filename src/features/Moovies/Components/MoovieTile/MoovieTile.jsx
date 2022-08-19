import "./MoovieTile.css";
import { openLink } from "../../../../lib/communicators/links/links.render.js";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClipboard } from "@fortawesome/free-solid-svg-icons";

const MoovieTile = ({
  link,
  text = "Nombre de la pelicula",
  year = new Date().getFullYear(),
  to = "/",
}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(to);
  };

  const openWebClick = (e) => {
    e.stopPropagation();
    console.log(`Clicked ${text} eye Icon`);
    openLink(link);
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
