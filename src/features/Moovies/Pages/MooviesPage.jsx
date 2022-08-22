import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  setTitle,
  setYear,
  setMooviesPage,
  setMooviesPages,
} from "../moovies.slice";

const MooviesPage = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setYear(""));
    dispatch(setMooviesPages(0));
    dispatch(setMooviesPage(1));
  });

  return (
    <div>
      <HomeNavBar hidden={<MoovieFilter />} />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
