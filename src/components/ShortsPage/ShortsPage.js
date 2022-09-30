import React, { useState, useEffect, useContext } from "react";
import "./ShortsPage.css";
import { VideoCard } from "../VideoCard/VideoCard";
import axios from "axios";
import { VideosContext } from "../../Context/VideosContext";
import { ShortsPlayer } from "../ShortsPlayer/ShortsPlayer";

export const ShortsPage = () => {
  const [videos, setVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState("");
  const [channelsUrl, setChannelsUrl] = useState("");

  const { setIsOnVideoPage, menu } = useContext(VideosContext);
  const shorts = {
    title: "Shorts",
    videos: [
      {
        id: "1",
        description:
          "These Celebrities HATE Tom Hanks! #shorts by Facts Verse. . Play on YouTube.",
        channel: "Facts Verse",
        url: "https://www.youtube.com/embed/JKNjU1ckHKI",
      },
      {
        id: "2",
        description:
          "Tom Hanks: My surprising conversation with Sully by Graham Bensinger. . Play on YouTube.",
        channel: "Graham Bensinger",
        url: "https://www.youtube.com/embed/Ivsct4nCSWc",
      },
      {
        id: "3",
        description:
          "Tom Hanks Reveals He Almost Died While Filming 'Cast Away' by Rare Media on YouTube",
        channel: "Rare Media",
        url: "https://www.youtube.com/embed/Yuy7Eyr3Ej4",
      },
      {
        id: "4",
        description:
          "Avengers Cast Entry Style 🔥 #shorts #marvel #ironman #avengers #spiderman",
        channel: "LEØ",
        url: "https://www.youtube.com/embed/p7jPo7mGqV0",
      },
    ],
  };
  setIsOnVideoPage(false);
  return (
    <div className="shortsPage">
      <div className="shortsPage__videos">
        {shorts.videos.map((video) => {
          return (
            <ShortsPlayer
              id={video.id}
              src={video.url}
              channel={video.channel}
              description={video.description}
              like="1.5k"
              dislike="1.5k"
              share="1.5k"
              comment="1.5k"
            />
          );
        })}
      </div>
    </div>
  );
};
