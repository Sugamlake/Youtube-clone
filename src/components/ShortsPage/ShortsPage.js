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
  //   useEffect(() => {
  //       axios.get('http://localhost:5000/api/search?search_query=music&order=relevance').then(function (response) {
  //           setVideosUrl(response.data.videos);
  //           setChannelsUrl(response.data.channels);
  //       }).catch(function (error) {
  //          console.error(error);});
  //   }, []);
  //   useEffect(() => {
  //     axios.get(`http://localhost:5000/api/videos?${videosUrl}`).then(function (response) {
  //       let arr = [];
  //       response.data.map(item => {
  //         if(item.snippet.title.length > 30){
  //           item.snippet.title = item.snippet.title.substring(0, 30) + "...";
  //         }
  //         arr.push(item);
  //       })
  //       setVideos(response.data);
  //       console.log(response.data.items);
  //       console.log(videos);
  //     }).catch(function (error) {
  //       console.error(error);
  //     })
  //   } , [videosUrl]);
  setIsOnVideoPage(false);
  return (
    <div className="shortsPage">
      <div className="shortsPage__videos">
        {/* {videos.map((video, index) => {
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
          )
        })} */}
      </div>
      <ShortsPlayer
          id="1"
          src="https://www.youtube.com/embed/Yuy7Eyr3Ej4?controls=0"
          // src="https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4"
          channel="Rare Media"
          description="Tom Hanks had some of Hollywood's most popular movies in the late '90s and early 2000s."
          like="1.5k"
          dislike="1.5k"
          share="1.5k"
          comment="1.5k"
        />
    </div>
  );
};
