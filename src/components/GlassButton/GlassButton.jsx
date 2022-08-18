import "./glass-button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GlassButton = ({
  icon,
  text = "Buttom",
  fontSize = "1em",
  margin = "0px 0px",
}) => {
  return (
    <div className="flat-button" style={{ margin: margin }}>
      <button href="#" style={{ fontSize: fontSize }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text} <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default GlassButton;
