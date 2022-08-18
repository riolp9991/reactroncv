import "./landing-page.css";

import { faVideo, faCogs } from "@fortawesome/free-solid-svg-icons";

import { FlatLink } from "../../../components/FlatButton/index";

const LandingPage = () => {
  return (
    <>
      <div>
        <FlatLink
          fontSize="1.4em"
          margin="10px 0px 0px 10px"
          text="películas"
          to="/moovies"
          icon={faVideo}
        />
      </div>
      <div>
        <FlatLink
          margin="10px 0px 0px 10px"
          fontSize="1.4em"
          text="Configuración"
          to="/"
          icon={faCogs}
        />
      </div>
    </>
  );
};

export default LandingPage;
