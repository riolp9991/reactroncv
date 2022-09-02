import "./MoovieVideo.css";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const MoovieVideo = (props) => {
  const video = useSelector((state) => state.moovies.videoLink);
  const subtitle = useSelector((state) => state.moovies.subtitleLink);

  console.log({ subtitle });

  const config = {
    file: {
      tracks:
        subtitle !== ""
          ? [
              {
                kind: "subtitles",
                src: subtitle,
                srcLang: "es",
                default: true,
              },
            ]
          : [],
    },
  };

  const data =
    video !== "" ? (
      <ReactPlayer
        className="video-player"
        url={video}
        width="100%"
        height="100%"
        controls={true}
        config={config}
      />
    ) : (
      <h1 className="moovie-video-text">
        No se ha seleccionado un video, ten en cuenta que solo se pueden
        reproducir archivos 'mp4' y 'mkv', ademas algunos archivos 'mp4' no
        utilizan los codecs de dicho formato y puede que no se pueda reproducir,
        por eso siempre te recomendamos descargarlos. <br /> <br />
        Actualmente nos encontramos trabajando en una manera de agregar
        subtitulos al reproductor;
      </h1>
    );

  return <div className="video-container">{data}</div>;
};

export default MoovieVideo;
