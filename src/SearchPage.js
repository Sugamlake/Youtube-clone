import React, {useState, useEffect} from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { ChannelRow } from "./ChannelRow";
import { VideoRow } from "./VideoRow";
import axios from "axios";

export const SearchPage = ({searchTerm}) => {
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: searchTerm, //Permite una búsqueda dinámica
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
  }, [searchTerm]);
  // useEffect(() => {
  //   let arr = [];
  //   videos.map(video => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://youtube-v31.p.rapidapi.com/videos',
  //       params: {part: 'contentDetails,snippet,statistics', id: video.id.videoId},
  //       headers: {
  //         'X-RapidAPI-Key': 'd9ded79661msh6c5d631ba510aeep18a8cbjsn1e92a6f80de6',
  //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //       }
  //     };
  //     axios.request(options).then(function (response) {
  //       arr.push(response.data.items[0]);
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  //   })
  //   setVideoDetails(arr);
  // }, [videos]);
  
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/93014692?v=4"
        channel="SugamDev"
        verified
        subs="660K"
        noOfVideos={382}
        description="Nice description"
      />
      <hr />

      {videos.map((video, index) => {
          return (
            <VideoRow
            key={index}
            title={video?.snippet.title}
            views="3.5M views"
            timestamp={video?.snippet.publishedAt}
            channel={video?.snippet.channelTitle}
            subs="2M"
            image={video?.snippet.thumbnails.medium.url}
            description={video?.snippet.description}
          />
          )
        })}
    </div>
  );
};
