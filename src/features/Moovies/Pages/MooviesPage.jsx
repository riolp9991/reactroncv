import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";
import useMoovieStore from "../Hooks/useMovieStore";

const MooviesPage = ({}) => {
  const getTitle = useMoovieStore((state) => state.searchTitle);

  return (
    <div>
      <HomeNavBar hidden={<MoovieFilter />} />
      <h1>{getTitle}</h1>
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
