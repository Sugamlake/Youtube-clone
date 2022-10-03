import React, { useState, useEffect } from "react";
import "./WatchLater.css";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { VideoRow } from "../VideoRow/VideoRow";
// const createImage = require("../../utilities/createChart");

// const image = createImage();
// console.log(image);

export const WatchLater = () => {
  //Acá se le cambia el nombre con el mismo del import de app.js
  const [videos, setVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState("");
  const [channelsUrl, setChannelsUrl] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/search?search_query=followers&order=relevance&channel_id=UCeY0bbntWzzVIaj2z3QigXg"
      )
      .then(function (response) {
        setVideosUrl(response.data.videos);
        setChannelsUrl(response.data.channels);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/videos?${videosUrl}`)
      .then(function (response) {
        let arr = [];
        response.data.map((item) => {
          if (item.snippet.title.length > 30) {
            item.snippet.title = item.snippet.title.substring(0, 30) + "...";
          }
          arr.push(item);
        });
        setVideos(response.data);
        console.log(response.data.items);
        console.log(videos);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [videosUrl]);
  return (
    <div className="watchLater">
      <div className="watchLater__description">
        <img src={videos[0]?.snippet.thumbnails.medium.url}></img>
        <h2>Watch Later</h2>
        <p>2,021 videos • No views • Last updated on Sep 11, 2022</p>
        <hr />
        <div className="watchLater__channel">
          <Avatar
            style={{ height: "50px", width: "50px" }}
            alt="SugamDev"
            src="https://avatars.githubusercontent.com/u/93014692?v=4"
          />
          <p>SugamDev</p>
        </div>
        <div></div>
      </div>
      <div className="watchLater__videos">
        {videos.map((video, index) => {
          return (
            <VideoRow
              key={index}
              title={video?.snippet.title}
              views={video?.statistics.viewCount}
              timestamp={video?.snippet.publishedAt}
              // channelImage="https://avatars.githubusercontent.com/u/93014692?v=4"
              channel={video?.snippet.channelTitle}
              image={video?.snippet.thumbnails.medium.url}
              subs={video?.statistics.subscriberCount}
              link={video?.id}
              type="watchLater"
            />
          );
        })}
      </div>
    </div>
  );
};
