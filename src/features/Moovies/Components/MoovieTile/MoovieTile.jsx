import "./MoovieTile.css";

import { useNavigate } from "react-router-dom";

const MoovieTile = ({
  text = "Nombre de la pelicula",
  link = "/",
  year = new Date().getFullYear(),
}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(link);
  };

  return (
    <div className="moovie-tile" onClick={redirect}>
      <span className="year">{year}</span>
      <h1>{text}</h1>
    </div>
  );
};

export default MoovieTile;
