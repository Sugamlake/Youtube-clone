import React from "react";
import "./RecommendedVideos.css";
import { VideoCard } from "./VideoCard";
import getVideos from "./youtube-api";

export const RecommendedVideos = () => {
  const videos = getVideos();
  console.log(videos);
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title={videos.items[0].snippet.title}
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image={videos.items[0].snippet.thumbnails.default.url}
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
        <VideoCard
          title="Youtube Clone | 2022 by Sugam"
          views="2M views"
          timestamp="3 days ago"
          channelImage="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
          channel="sugam"
          image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        />
      </div>
    </div>
  );
};
