import { FlatLink } from "../../../components/FlatButton/index";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";
import MoovieFilter from "../Components/MoovieFilter/MoovieFilter";

const MooviesPage = (props) => {
  const filter = <MoovieFilter />;
  return (
    <div>
      <HomeNavBar hidden={filter} />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
