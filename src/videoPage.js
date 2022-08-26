import axios from "axios";
import React, { useState, useEffect } from "react";
import { VideoPlayer } from "./videoPlayer";

export const VideoPage = ({ videoId }) => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/videos?video_id=${videoId}`).then(function (response) {
          setVideo(response.data);
          console.log(response.data.items);
          console.log(video);
        }).catch(function (error) {
          console.error(error);
        })
      } , []);
    return (
        <VideoPlayer 
        title={video[0]?.snippet.title}
        views={video[0]?.statistics.viewCount}
        timestamp={video[0]?.snippet.publishedAt}
        channelImage={video[0]?.channel}
        channel={video[0]?.snippet.channelTitle}
        player={video[0]?.player.embedHtml}
        description={video[0]?.snippet.description} />
    )
}