import "./MoovieDetailsInfo.css";

const MoovieDetailsInfo = ({ moovieData }) => {
  console.log({ moovieData });
  console.log("MOOVIEDETAILSINFO");
  let actors = [];
  actors =
    moovieData.actor.length > 10
      ? moovieData.actor.slice(0, 10)
      : moovieData.actor;

  let directors = [];
  directors = moovieData.director;

  return (
    <>
      <div className="moovie-sinopsis">
        <h1>Sinopsis</h1>
        <p>{moovieData.plot[0]}</p>
      </div>
      <div className="moovie-actors">
        <h1>Actores</h1>
        <div className="moovie-tags">
          {actors.map((value, index) => {
            return <span className="tag">{value.name}</span>;
          })}
        </div>
      </div>
      <div className="moovie-director">
        <h1>Dirigido Por</h1>
        <div className="moovie-tags">
          {directors.map((value, index) => {
            return (
              <span key={value._} className="tag">
                {value._}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoovieDetailsInfo;
