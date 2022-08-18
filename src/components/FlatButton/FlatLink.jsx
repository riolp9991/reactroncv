import "./FlatLink.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FlatButton = ({
  icon,
  text = "Buttom",
  fontSize = "1em",
  margin = "0px 0px",
  borderColor = "#ec770a",
  iconColor = "#eeba8a",
  to = "/",
  reverseIcon = false,
}) => {
  const iconFirst = (
    <>
      <FontAwesomeIcon icon={icon} /> {text}{" "}
    </>
  );
  const textFirst = (
    <>
      {text} <FontAwesomeIcon icon={icon} />
    </>
  );

  return (
    <div
      className="flat-button"
      style={{
        margin: margin,
        "--flat-button-border-color": borderColor,
        "--flat-button-icon-color": iconColor,
      }}
    >
      <Link to={to} style={{ fontSize: fontSize }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {reverseIcon ? iconFirst : textFirst}
      </Link>
    </div>
  );
};

export default FlatButton;
