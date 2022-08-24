import React,{useState, useEffect} from "react";
import "./history.css"; //Acá se le cambia el nombre del archivo con el mismo del import de app.js
import { VideoCard } from "./VideoCard";
import axios from "axios";


export const History = () => { //Acá se le cambia el nombre con el mismo del import de app.js
  const [videos, setVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState('');
  const [channelsUrl, setChannelsUrl] = useState('');
  const [playlists, setPlaylists] = useState([]);


  useEffect(() => {
      axios.get('http://localhost:5000/api/search?search_query=starcraft%20remasterizado&order=relevance').then(function (response) {
          setVideosUrl(response.data.videos);
          setChannelsUrl(response.data.channels);
      }).catch(function (error) {
         console.error(error);});
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos?${videosUrl}`).then(function (response) {
      let arr = [];
      response.data.map(item => {
        if(item.snippet.title.length > 30){
          item.snippet.title = item.snippet.title.substring(0, 30) + "...";
        }
        arr.push(item);
      })
      setVideos(response.data);
      console.log(response.data.items);
      console.log(videos);
    }).catch(function (error) {
      console.error(error);
    })
  } , [videosUrl]);
  return (
    <div className="history"> //Acá se le cambia el nombre a la carpeta actual con minúsculas
      <h2>Library</h2>
      <div className="history__videos"> //Acá se le cambia el nombre a la carpeta actual con minúsculas
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
          )
        })}
        <hr />

      </div>
    </div>
  );
};
