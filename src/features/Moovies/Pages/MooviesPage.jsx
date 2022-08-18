import { FlatLink } from "../../../components/FlatButton/index";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";

const MooviesPage = (props) => {
  return (
    <div>
      <HomeNavBar />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
