import "./MoovieList.css";

import MoovieTile from "../MoovieTile/MoovieTile";
import { findMoovies } from "../../../../database/comunicators/moovies/moovies.render";

import { useEffect, useState } from "react";

const MoovieList = () => {
  const [moovies, setMoovies] = useState([]);

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
    <div className="moovie-list">
      {moovies.map((item) => {
        console.log(item.dataValues.title);
        return (
          <MoovieTile
            year={item.dataValues.year}
            key={item.dataValues.id}
            text={item.dataValues.title}
          />
        );
      })}
    </div>
  );
};

export default MoovieList;
