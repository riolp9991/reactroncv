import "./MoovieDetailNav.css";
import { FlatLink, FlatButton } from "../../../../components/FlatButton/index";
import {
  faArrowLeft,
  faEye,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const MoovieDetailNav = ({ title = "", link = "", year = "" }) => {
  return (
    <header className="moovie-details-header">
      <nav className="moovie-details-nav">
        <div className="moovie-details-nav-sections">
          <FlatLink
            text=""
            to="/moovies"
            icon={faArrowLeft}
            reverseIcon={true}
          />
          <h1>{title}</h1>
          <span className="year">{year}</span>
        </div>
        <div className="moovie-details-nav-sections">
          <FlatButton text="" icon={faEye} />
          <FlatButton text="" icon={faClipboard} />
        </div>
      </nav>
    </header>
  );
};

export default MoovieDetailNav;
