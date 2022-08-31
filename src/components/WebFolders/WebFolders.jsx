import "./WebFolders.css";
import { getLinks } from "./functions";
import { useState, useEffect } from "react";

const WebFolders = ({ link = "", background = "var(--solid-bg)" }) => {
  const [currentLink, setCurrentLink] = useState(link);
  const [items, setItems] = useState([]);

  const searchLinks = async () => {
    const links = await getLinks(currentLink);
    setItems(links);
    console.log({ items });
  };

  useEffect(() => {
    searchLinks();
  }, [currentLink]);

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
