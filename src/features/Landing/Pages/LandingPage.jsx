import "./landing-page.css";

import { faVideo, faCogs } from "@fortawesome/free-solid-svg-icons";

import { FlatLink } from "../../../components/FlatButton/index";

const LandingPage = (props) => {
  return (
    <>
      <div>
        <FlatLink
          fontSize="1.4em"
          margin="10px 0px 0px 10px"
          text="películas"
          to="/profiles"
          icon={faVideo}
        />
      </div>
      <div>
        <FlatLink
          margin="10px 0px 0px 10px"
          fontSize="1.4em"
          text="Configuración"
          to="/profiles"
          icon={faCogs}
        />
      </div>
    </>
  );
};

export default LandingPage;
