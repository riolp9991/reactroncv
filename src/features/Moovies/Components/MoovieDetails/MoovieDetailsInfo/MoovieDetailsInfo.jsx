const MoovieDetailsInfo = ({ moovieData }) => {
  return (
    <>
      <div className="moovie-sinopsis">
        <h1>Sinopsis</h1>
        <p>{moovieData.plot[0]}</p>
      </div>
    </>
  );
};

export default MoovieDetailsInfo;
