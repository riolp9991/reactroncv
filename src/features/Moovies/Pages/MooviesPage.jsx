import { FlatLink } from "../../../components/FlatButton/index";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import MoovieList from "../Components/MoovieList/MoovieList";

const MooviesPage = (props) => {
  const filter = <h1>Esto estara oculto</h1>;
  return (
    <div>
      <HomeNavBar hidden={filter} />
      <MoovieList />
    </div>
  );
};

export default MooviesPage;
