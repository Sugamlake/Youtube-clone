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
}) => {
  return (
    <div className="relatedVideos">
      <Link
        to={`/video/${link}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="relatedVideos__thumbnail">
          <img alt={channel} src={image} width="168px" />
        </div>
        <div className="relatedVideos__text">
          <h3>{title}</h3>
          <p className="relatedVideos__headline">
            {channel} • {views} views • {timestamp}
          </p>
        </div>
      </Link>
    </div>
  );
};
