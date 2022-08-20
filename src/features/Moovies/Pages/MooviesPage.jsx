import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";

import { useState } from "react";
const MooviesPage = ({}) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  let filter = (
    <MoovieFilter
      key="moovieFilter"
      setTitleParent={setTitle}
      setYearParent={setYear}
    />
  );
  return (
    <div>
      <HomeNavBar key="MoovieNav" hidden={filter} />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
