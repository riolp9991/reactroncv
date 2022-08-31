import "./WebFolders.css";
import { getLinks } from "./functions";
import { useState, useEffect } from "react";
import { FlatButton } from "../FlatButton/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faDownload,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const WebFolders = ({ link = "", background = "var(--solid-bg)" }) => {
  //console.log({ link });
  const [currentLink, setCurrentLink] = useState(link);
  //console.log({ currentLink });
  const [items, setItems] = useState([]);

  const searchLinks = async () => {
    const links = await getLinks(currentLink);
    console.log({ items });
    setItems(links);
  };

  useEffect(() => {
    searchLinks();
  }, [currentLink]);

  useEffect(() => {
    setCurrentLink(link);
  }, [link]);

  const linksList =
    items && items.length > 0 ? (
      items.map((element, index) => {
        return <WebLink key={`link ${index}`} text={element.text} />;
      })
    ) : (
      <h1 className="nothing-found">No se han cargado los ficheros</h1>
    );

  return (
    <div
      className="web-folder-viewer"
      style={{ "--web-folder-background": background }}
    >
      <span className="link">{currentLink}</span>
      <span className="separator" />
      {linksList}
    </div>
  );
};

const WebLink = ({
  text = "HELLo",
  onClick = () => {
    console.log(text);
  },
  link = "",
}) => {
  return (
    <div onClick={onClick} className="web-folder-link">
      <div className="content">
        <h1>{text}</h1>
        <div className="icons">
          <FlatButton font-size="1em" text="" icon={faClipboard} />
          <FlatButton font-size="1em" text="" icon={faDownload} />
        </div>
      </div>
    </div>
  );
};

export default WebFolders;
