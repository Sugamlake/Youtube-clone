import React,{useState, useEffect} from "react";
import "./RecommendedVideos.css";
import { VideoCard } from "./VideoCard";
import axios from "axios";


export const RecommendedVideos = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: 'music',
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '12',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': 'd9ded79661msh6c5d631ba510aeep18a8cbjsn1e92a6f80de6',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
      axios.request(options).then(function (response) {
        let arr = [];
        response.data.items.map(item => {
          if("snippet" in item){
            arr.push(item);
          }
        })
          setVideos(arr.slice(0,12));
      }).catch(function (error) {
         console.error(error);});
  }, []);
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map((video, index) => {
          return (
            <VideoCard
            key={index}
            title={video?.snippet.title}
            views="2M views"
            timestamp="3 days ago"
            channelImage="https://avatars.githubusercontent.com/u/93014692?v=4"
            channel="sugam"
            image={video?.snippet.thumbnails.medium.url}
          />
          )
        })}
      </div>
    </div>
  );
};
