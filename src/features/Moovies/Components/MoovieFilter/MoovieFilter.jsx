import "./MoovieFilter.css";
import CustomText from "../../../../components/CustomText/CustomText";
import FlatButton from "../../../../components/FlatButton/FlatButton";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MoovieFilter = (props) => {
  return (
    <div className="moovie-filter">
      <div className="section">
        <CustomText width="100%" placeholder="Titulo" />
        <CustomText width="260px" placeholder="Año De Estreno" />
      </div>
      <div className="section">
        <FlatButton text="" icon={faSearch} />
      </div>
    </div>
  );
};

export default MoovieFilter;
