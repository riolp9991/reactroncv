import "./HomeNavBar.css";

import { FlatLink, FlatButton } from "../../../../components/FlatButton/index";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = (props) => {
  return (
    <nav className="moovies-home-nav">
      <FlatLink
        fontSize="0.9em"
        to="/"
        borderColor="var(--purple-accent)"
        iconColor="var(--purple-text)"
        text="Inicio"
        icon={faHome}
        reverseIcon={true}
      />
      <FlatButton
        borderColor="var(--purple-accent)"
        iconColor="var(--purple-text)"
        fontSize="0.9em"
        text="Filtrar"
        icon={faSearch}
      />
    </nav>
  );
};

export default HomeNavBar;
