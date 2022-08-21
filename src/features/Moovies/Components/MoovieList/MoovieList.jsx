import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";
import FlatLink from "../../../../components/FlatButton/FlatLink";
import { findMoovies } from "../../../../database/comunicators/moovies/moovies.render";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setYear } from "../../moovies.slice";
import MooviesPaginate from "../MooviesPaginate/MoovesPaginate";

import { useEffect, useState } from "react";

const SinglePaginate = () => <MooviesPaginate />;

const MoovieList = () => {
  const [moovies, setMoovies] = useState([]);
  const titleForFinding = useSelector((state) => state.moovies.title);
  const yearForFinding = useSelector((state) => state.moovies.year);

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
    const fetchedData = await findMoovies(titleForFinding, yearForFinding);
    setMoovies(fetchedData);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setYear(""));
  }, []);

  useEffect(() => {
    SearchMoovies();
  }, [titleForFinding, yearForFinding]);

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
