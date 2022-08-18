import "./HomeNavBar.css";

import { FlatLink, FlatButton } from "../../../../components/FlatButton/index";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = (props) => {
  return (
    <nav className="moovies-home-nav">
      <FlatLink
        fontSize="0.9em"
        to="/"
        //borderColor="#D81A1A"
        //iconColor="#DA7575"
        text="Inicio"
        icon={faHome}
        reverseIcon={true}
      />
      <FlatButton
        //borderColor="#E615BE"
        //iconColor="#D38FC6"
        fontSize="0.9em"
        text="Filtrar"
        icon={faSearch}
      />
    </nav>
  );
};

export default HomeNavBar;
