import "./MoovieVideo.css";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const MoovieVideo = (props) => {
  const video = useSelector((state) => state.moovies.videoLink);
  const subtitle = useSelector((state) => state.moovies.subtitleLink);

  console.log({ VIDEO_LINK: video });

  const data =
    video !== "" ? (
      <ReactPlayer url={video} width="100%" height="100%" controls={true} />
    ) : (
      <h1 className="moovie-video-text">No se ha seleccionado un video</h1>
    );

  return <div className="video-container">{data}</div>;
};

export default MoovieVideo;
