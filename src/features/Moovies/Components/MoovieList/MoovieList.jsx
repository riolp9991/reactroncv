import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";
import FlatLink from "../../../../components/FlatButton/FlatLink";
import { findMoovies } from "../../../../database/comunicators/moovies/moovies.render";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setTitle,
  setYear,
  setMooviesPages,
  setMooviesPage,
} from "../../moovies.slice";
import MooviesPaginate from "../MooviesPaginate/MoovesPaginate";

import { useEffect, useState } from "react";

const MoovieList = () => {
  const [moovies, setMoovies] = useState([]);
  const [count, setCount] = useState(0);
  const titleForFinding = useSelector((state) => state.moovies.title);
  const yearForFinding = useSelector((state) => state.moovies.year);
  const paginationPage = useSelector((state) => state.moovies.mooviesPage);
  const paginationPages = useSelector((state) => state.moovies.mooviesPages);

  const SinglePaginate = () => {
    if (Math.ceil(paginationPages / 32) > 1) return <MooviesPaginate />;
    return <span style={{ marginTop: "2em", display: "block" }}></span>;
  };

  const TextForEmpty = () =>
    moovies.length === 0 ? (
      <div className="float-text-empty">
        <div className="content">
          <h1>
            No se han encontrado peliculas prueba sincronizando la base de datos
          </h1>
          <FlatLink
            icon={faCogs}
            text="Ir a configuracion"
            margin="10px 0px 0px 0px"
            reverseIcon={true}
            borderColor="var(--purple-accent)"
            iconColor="var(--purple-text)"
          />
        </div>
      </div>
    ) : (
      <></>
    );

  const SearchMoovies = async () => {
    const fetchedData = await findMoovies(
      titleForFinding,
      yearForFinding,
      paginationPage
    );
    setMoovies(fetchedData.data);
    setCount(fetchedData.count);
    dispatch(setMooviesPages(fetchedData.count));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("HOLALALALAL");
    dispatch(setMooviesPage(1));
    dispatch(setMooviesPages(0));
    dispatch(setTitle(""));
    dispatch(setYear(""));
    SearchMoovies();
  }, []);

  useEffect(() => {
    SearchMoovies();
  }, [titleForFinding, yearForFinding, paginationPage, paginationPages]);

  return (
    <>
      <TextForEmpty />
      <div className="moovie-list-holder">
        <SinglePaginate />
        <div className="moovie-list">
          {moovies.map((item) => {
            return (
              <MoovieTile
                link={item.dataValues.link}
                year={item.dataValues.year}
                key={item.dataValues.id}
                text={item.dataValues.title}
                to={item.dataValues.id}
              />
            );
          })}
        </div>
        <SinglePaginate />
      </div>
    </>
  );
};

export default MoovieList;
