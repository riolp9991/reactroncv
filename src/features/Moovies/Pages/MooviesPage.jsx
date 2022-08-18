import { FlatLink } from "../../../components/FlatButton/index";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const MooviesPage = (props) => {
  return (
    <div>
      <FlatLink to="/" text="Inicio" icon={faHome} reverseIcon={true} />
    </div>
  );
};

export default MooviesPage;
