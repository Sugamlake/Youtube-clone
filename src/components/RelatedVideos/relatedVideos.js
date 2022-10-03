import React from "react";
import "./relatedVideos.css";
import { Link } from "react-router-dom";

export const RelatedVideos = ({
  views,
  timestamp,
  channel,
  title,
  image,
  link,
  menu,
}) => {
  return (
    <Link
      to={`/video/${link}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="relatedVideos" style={menu ? { display: "block" } : {}}>
        <div
          className="relatedVideos__thumbnail"
          style={menu ? { display: "block" } : {}}
        >
          <img alt={channel} src={image} width="150px" />
        </div>
        <div
          className="relatedVideos__text"
          style={menu ? { display: "block" } : {}}
        >
          <h3>{title}</h3>
          <p className="relatedVideos__headline">
            {channel} • {views} views • {timestamp}
          </p>
        </div>
      </div>
    </Link>
  );
};
