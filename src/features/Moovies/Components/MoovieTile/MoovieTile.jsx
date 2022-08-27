import "./MoovieTile.css";
import { openLink } from "../../../../lib/communicators/links/links.render.js";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { setCurrentMoovieId } from "../../moovies.slice.js";
import { useDispatch } from "react-redux";

const MoovieTile = ({
  link,
  text = "Nombre de la pelicula",
  year = new Date().getFullYear(),
  to = "",
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/moovies/${to}`);
  };

  const openWebClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentMoovieId(to));
    openLink(link);
  };

  const copyToClipboard = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link);
    alert("Enlace copiado al portapapeles");
  };

  return (
    <div className="moovie-tile" onClick={redirect}>
      <span className="year">{year}</span>
      <span className="float-tile web" onClick={openWebClick}>
        <FontAwesomeIcon icon={faEye} />
      </span>
      <span className="float-tile clip" onClick={copyToClipboard}>
        <FontAwesomeIcon icon={faClipboard} />
      </span>
      <h1>{text}</h1>
    </div>
  );
};

export default MoovieTile;
