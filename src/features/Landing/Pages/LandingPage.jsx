import "./landing-page.css";

import { faVideo, faCogs } from "@fortawesome/free-solid-svg-icons";

import GlassButton from "../../../components/GlassButton/GlassButton";

const LandingPage = (props) => {
  return (
    <>
      <div>
        <GlassButton
          fontSize="1.4em"
          margin="10px 0px 0px 10px"
          text="Peliculas"
          icon={faVideo}
        />
      </div>
      <div>
        <GlassButton
          margin="10px 0px 0px 10px"
          fontSize="1.4em"
          text="Configuracion"
          icon={faCogs}
        />
      </div>
    </>
  );
};

export default LandingPage;
