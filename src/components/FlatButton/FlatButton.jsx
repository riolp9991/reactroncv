import "./FlatButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlatButton = ({
  icon,
  text = "Buttom",
  fontSize = "1em",
  margin = "0px 0px",
  borderColor = "#ec770a",
  iconColor = "#eeba8a",
  onClick = () => {
    console.log(text);
  },
}) => {
  return (
    <div
      className="flat-button"
      style={{
        margin: margin,
        "--flat-button-border-color": borderColor,
        "--flat-button-icon-color": iconColor,
      }}
    >
      <button onClick={onClick} href="#" style={{ fontSize: fontSize }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text} <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default FlatButton;
