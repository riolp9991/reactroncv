import "./WebFolders.css";
import { getLinks } from "./functions";
import { useState, useEffect } from "react";

const WebFolders = ({ link = "", background = "var(--solid-bg)" }) => {
  //console.log({ link });
  const [currentLink, setCurrentLink] = useState(link);
  //console.log({ currentLink });
  const [items, setItems] = useState([]);

  const searchLinks = async () => {
    const links = await getLinks(currentLink);
    setItems(links);
    console.log({ items });
  };

  useEffect(() => {
    searchLinks();
  }, [currentLink]);

  useEffect(() => {
    setCurrentLink(link);
  }, [link]);

  return (
    <div
      className="web-folder-viewer"
      style={{ "--web-folder-background": background }}
    >
      <span className="link">{currentLink}</span>
    </div>
  );
};

export default WebFolders;
