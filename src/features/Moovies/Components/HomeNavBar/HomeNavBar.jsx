import "./HomeNavBar.css";

import { useState } from "react";
import { FlatLink, FlatButton } from "../../../../components/FlatButton/index";
import {
  faHome,
  faSearch,
  faRedo,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = ({ hidden }) => {
  let [showHidden, setHidden] = useState(false);
  const hiddenElement = <div className="hidden">{hidden}</div>;

  const HiddenChild = () => {
    if (showHidden) return hiddenElement;
    return <></>;
  };

  const filterIcon = () => (showHidden ? faMinus : faSearch);

  const toggleHidden = () => {
    setHidden(!showHidden);
  };

  return (
    <header className="moovies-header">
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
            icon={filterIcon()}
            onClick={toggleHidden}
          />
        </div>
      </nav>
      <HiddenChild />
    </header>
  );
};

export default HomeNavBar;
