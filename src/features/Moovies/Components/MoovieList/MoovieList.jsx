import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";
import FlatLink from "../../../../components/FlatButton/FlatLink";
import { findMoovies } from "../../../../database/comunicators/moovies/moovies.render";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import useMoovieStore from "../../Hooks/useMoovieStore";

import { useEffect, useState, useMemo } from "react";

const MoovieList = () => {
  const [moovies, setMoovies] = useState([]);
  //const titleToSearch = useMoovieStore((state) => state.searchTitle);
  const titleToSearch = useMemo(
    useMoovieStore((state) => state.searchTitle),
    state
  );

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

  const startMooviesArray = async () => {
    const data = await await SearchMoovies();
    setMoovies(data);
  };

  const addToMooviesArray = async (newData) => {
    setMoovies([...moovies, ...newData]);
  };

  const SearchMoovies = async () => {
    console.log("FETCHING MOOVIES");
    const fetchedData = await findMoovies();
    findMoovies().then((result) => {
      console.log("Hello");
      console.log({ result });
    });

    return fetchedData;
  };

  useEffect(() => {
    console.log("Hello");
    startMooviesArray();
  }, []);

  let testTiles = [];
  for (let i = 0; i <= 14; i++) {
    testTiles.push(<MoovieTile />);
  }

  return (
    <>
      <TextForEmpty />
      <div className="moovie-list">
        {moovies.map((item) => {
          console.log(item.dataValues.title);
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
