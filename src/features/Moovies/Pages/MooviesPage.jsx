import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";

const MooviesPage = ({}) => {
  return (
    <div>
      <HomeNavBar hidden={<MoovieFilter />} />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
