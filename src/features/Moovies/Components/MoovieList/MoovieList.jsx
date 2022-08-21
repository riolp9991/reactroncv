import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";
import FlatLink from "../../../../components/FlatButton/FlatLink";
import { findMoovies } from "../../../../database/comunicators/moovies/moovies.render";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import useMoovieStore from "../../Hooks/useMoovieStore";
import { setTitle, setYear } from "../../moovies.slice";

import { useEffect, useState, useMemo } from "react";

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
    //console.log("FETCHING MOOVIES");
    const fetchedData = await findMoovies(titleForFinding, yearForFinding);
    //findMoovies(titleForFinding, yearForFinding).then((result) => {
    //console.log({ result });
    //});
    //console.log(fetchedData);
    setMoovies(fetchedData);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setYear(""));
  });

  useEffect(() => {
    SearchMoovies();
  }, [titleForFinding, yearForFinding]);

  return (
    <>
      <TextForEmpty />
      <button onClick={SearchMoovies}>CLick me</button>
      <div className="moovie-list">
        {moovies.map((item) => {
          //console.log(item.dataValues.title);
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
    </>
  );
};

export default MoovieList;
