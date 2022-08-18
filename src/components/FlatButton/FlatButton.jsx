import "./FlatButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlatButton = ({
  icon,
  text = "Buttom",
  fontSize = "1em",
  margin = "0px 0px",
  borderColor = "#ec770a",
  iconColor = "#eeba8a",
  reverseIcon = false,
  onClick = () => {
    console.log(text);
  },
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
      <button onClick={onClick} href="#" style={{ fontSize: fontSize }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {reverseIcon ? iconFirst : textFirst}
      </button>
    </div>
  );
};

export default FlatButton;
