import "./landing-page.css";

import { faVideo, faCogs } from "@fortawesome/free-solid-svg-icons";

import { FlatLink } from "../../../components/FlatButton/index";

const LandingPage = () => {
  return (
    <>
      <div>
        <FlatLink
          fontSize="2.0em"
          margin="20px 0px 0px 20px"
          text="películas"
          to="/moovies"
          icon={faVideo}
        />
      </div>
      <div>
        <FlatLink
          margin="20px 0px 0px 20px"
          fontSize="2.0em"
          text="Configuración"
          to="/"
          icon={faCogs}
        />
      </div>
    </>
  );
};

export default LandingPage;
