import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";

const MoovieList = () => {
  let testTiles = [];
  for (let i = 0; i <= 14; i++) {
    testTiles.push(<MoovieTile />);
  }

  return (
    <div className="moovie-list">
      <MoovieTile text="Nombre" />
      <MoovieTile text="Nombre de la pelicula" />
    </div>
  );
};

export default MoovieList;
