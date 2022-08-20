import "./MoovieFilter.css";
import CustomText from "../../../../components/CustomText/CustomText";
import FlatButton from "../../../../components/FlatButton/FlatButton";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MoovieFilter = ({}) => {
  const [titleVar, setTitle] = useState("");
  const [yearVar, setYear] = useState("");

  return (
    <div className="moovie-filter">
      <div className="section">
        <CustomText
          value={titleVar}
          setValue={setTitle}
          width="100%"
          placeholder="Titulo"
        />
        <CustomText
          value={yearVar}
          setValue={setYear}
          textAlign="center"
          type="number"
          width="260px"
          placeholder="Año De Estreno"
        />
      </div>
      <div className="section">
        <FlatButton text="" icon={faSearch} />
      </div>
      <p>{titleVar}</p>
    </div>
  );
};

export default MoovieFilter;
