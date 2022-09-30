import React, { useState, useEffect, useContext } from "react";
import "./RecommendedVideos.css";
import { VideoCard } from "../VideoCard/VideoCard";
import axios from "axios";
import { VideosContext } from "../../Context/VideosContext";

export const RecommendedVideos = () => {
  const [videos, setVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState("");
  const [channelsUrl, setChannelsUrl] = useState("");
  const [buttons, setButtons] = useState([
    "Todos",
    "Mixes",
    "Música",
    "Juegos",
    "Deportes",
    "Noticias",
    "Películas",
    "Animación",
    "En vivo",
    "Más",
  ]);

  const [activeButton, setActiveButton] = useState("Todos");

  const { setIsOnVideoPage, menu } = useContext(VideosContext);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/search?search_query=music&order=relevance"
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
  setIsOnVideoPage(false);
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__categories">
        {buttons.map((item) => (
          <button
            className={`recommendedVideos__button ${
              activeButton === item && "recommendedVideos__button--active"
            }`}
            onClick={() => {
              // setVideosUrl(`search_query=${button}&order=relevance`);
              setActiveButton(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="recommendedVideos__videos">
        {videos.map((video, index) => {
          return (
            <VideoCard
              key={index}
              title={video?.snippet.title}
              views={video?.statistics.viewCount}
              timestamp={video?.snippet.publishedAt}
              channelImage="https://avatars.githubusercontent.com/u/93014692?v=4"
              channel={video?.snippet.channelTitle}
              image={video?.snippet.thumbnails.medium.url}
              link={video?.id}
            />
          );
        })}
      </div>
    </div>
  );
};
