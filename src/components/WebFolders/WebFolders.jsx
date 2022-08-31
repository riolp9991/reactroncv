import "./WebFolders.css";
import { getLinks } from "./functions";
import { useState, useEffect } from "react";
import { FlatButton } from "../FlatButton/index.js";
import { useDispatch } from "react-redux";
import {
  setSubtitleLink,
  setVideoLink,
} from "../../features/Moovies/moovies.slice.js";

import {
  faDownload,
  faClipboard,
  faFolder,
  faFileImage,
  faFileText,
  faFileVideo,
  faFileLines,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebFolders = ({ link = "", background = "var(--solid-bg)" }) => {
  const [currentLink, setCurrentLink] = useState(link);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchLinks = async () => {
    setLoading(true);
    const links = await getLinks(currentLink);
    setItems(links);
    setLoading(false);
  };

  useEffect(() => {
    if (!currentLink.includes(link)) setCurrentLink(link);
    searchLinks();
  }, [currentLink]);

  useEffect(() => {
    //setCurrentLink(link);
  }, [link]);

  useEffect(() => {
    setCurrentLink(link);
  }, [link]);

  const loadingText = loading ? (
    <span className="is-loading">Cargando</span>
  ) : (
    <></>
  );

  const linksList =
    items && items.length > 0 ? (
      items.map((element, index) => {
        return (
          <WebLink
            folderClick={() => setCurrentLink(element.link)}
            key={`link ${index}`}
            text={element.text}
            link={element.link}
          />
        );
      })
    ) : (
      <h1 className="nothing-found">No se han cargado los ficheros</h1>
    );

  return (
    <div
      className="web-folder-viewer"
      style={{ "--web-folder-background": background }}
    >
      {loadingText}
      <span className="link">{currentLink}</span>
      <span className="separator" />
      {linksList}
    </div>
  );
};

const WebLink = ({
  text = "HELLo",
  folderClick = () => {
    console.log(text);
  },
  link = "",
}) => {
  const dispatch = useDispatch();
  const isFolder = text.split(".")[0] == "" || text.split(".").length == 1;

  let icon = faFileLines;

  if (isFolder) icon = faFolder;
  if (text.includes(".png") || text.includes(".jpg")) icon = faFileImage;
  if (
    text.includes(".mp4") ||
    text.includes(".avi") ||
    text.includes(".mpg") ||
    text.includes(".mkv")
  )
    icon = faFileVideo;

  const playIcon =
    text.includes(".mp4") || text.includes(".mkv") ? (
      <FlatButton
        fontSize="1em"
        text=""
        icon={faPlay}
        onClick={(e) => {
          e.stopPropagation();
          console.log("VIDEO");
          dispatch(setVideoLink(link));
        }}
      />
    ) : (
      <></>
    );

  const subtitleIcon = text.includes(".srt") ? (
    <FlatButton
      text=""
      icon={faFileText}
      onClick={(e) => {
        e.stopPropagation();
        console.log("SUBTITLE");
        dispatch(setSubtitleLink(link));
      }}
    />
  ) : (
    <></>
  );

  const downloadIcon = isFolder ? (
    <></>
  ) : (
    <FlatButton font-size="1em" text="" icon={faDownload} />
  );

  return (
    <div
      onClick={() => {
        if (isFolder) folderClick();
      }}
      className="web-folder-link"
    >
      <div className="content">
        <h1>
          <FontAwesomeIcon icon={icon} />
          &nbsp; &nbsp;
          {text}
        </h1>
        <div className="icons">
          {playIcon}
          {subtitleIcon}
          <FlatButton font-size="1em" text="" icon={faClipboard} />
        </div>
      </div>
    </div>
  );
};

export default WebFolders;
