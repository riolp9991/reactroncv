import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";
import useMoovieStore from "../Hooks/useMovieStore";

const MooviesPage = ({}) => {
  const title = useMoovieStore((state) => state.searchTitle);

  return (
    <div>
      <HomeNavBar hidden={<MoovieFilter />} />
      <MoovieList />
      <h1>{title}</h1>
    </div>
  );
};

export default MooviesPage;
