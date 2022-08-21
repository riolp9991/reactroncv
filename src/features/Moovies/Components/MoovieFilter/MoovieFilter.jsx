import "./MoovieFilter.css";
import CustomText from "../../../../components/CustomText/CustomText";
import FlatButton from "../../../../components/FlatButton/FlatButton";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setTitle as setStoredTitle,
  setYear as setStoredYear,
} from "../../moovies.slice.js";

const MoovieFilter = () => {
  //Internal variables
  const [titleVar, setTitle] = useState("");
  const [yearVar, setYear] = useState("");
  const dispatch = useDispatch();
  const changeFilter = () => {
    dispatch(setStoredTitle(titleVar));
    dispatch(setStoredYear(yearVar));
  };

  return (
    <form onSubmit={changeFilter} className="moovie-filter">
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
    </form>
  );
};

export default MoovieFilter;
