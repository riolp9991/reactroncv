import "./HomeNavBar.css";

import { FlatLink, FlatButton } from "../../../../components/FlatButton/index";
import { faHome, faSearch, faRedo } from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = (props) => {
  return (
    <nav className="moovies-home-nav">
      <div className="section">
        <FlatLink
          fontSize="0.9em"
          to="/"
          borderColor="var(--purple-accent)"
          iconColor="var(--purple-text)"
          text="Inicio"
          icon={faHome}
          reverseIcon={true}
        />
      </div>
      <div className="section">
        <FlatButton
          borderColor="var(--purple-accent)"
          iconColor="var(--purple-text)"
          fontSize="0.9em"
          text=""
          icon={faRedo}
        />
        <FlatButton
          borderColor="var(--purple-accent)"
          iconColor="var(--purple-text)"
          fontSize="0.9em"
          text="filtrar"
          icon={faSearch}
        />
      </div>
    </nav>
  );
};

export default HomeNavBar;
