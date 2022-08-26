import React,{useState, useEffect, useContext} from "react";
import "./Subscriptions.css";
import { VideoCard } from "../VideoCard/VideoCard";
import axios from "axios";
import { VideosContext} from '../../Context/VideosContext';

const calculateWeek = () => {
  let d1 = new Date()
  let dateOffset = (24*60*60*1000)* 7;
  d1.setTime(d1.getTime()- dateOffset);
  return d1
}
export const Subscriptions = () => { //Acá se le cambia el nombre con el mismo del import de app.js
  const [todayVideos, setTodayVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState('');
  const [weekVideos, setWeekVideos] = useState([]);
  const [weekVideosUrl, setWeekVideosUrl] = useState([]);
  const [monthVideos, setMonthVideos] = useState([]);
  const [monthVideosUrl, setMonthVideosUrl] = useState([]);
  const {menu, setIsOnVideoPage} = useContext(VideosContext);
  console.log(calculateWeek());
  useEffect(() => {
      axios.get('http://localhost:5000/api/search?order=date&channel_id=UCeY0bbntWzzVIaj2z3QigXg').then(function (response) {
          setVideosUrl(response.data.videos);
      }).catch(function (error) {
         console.error(error);
      });
      axios.get(`http://localhost:5000/api/search?after=2022-08-22T00:00:00Z&channel_id=UCeY0bbntWzzVIaj2z3QigXg`).then(function (response) {
          setWeekVideosUrl(response.data.videos);
          console.log(response.data.videos);
      }).catch(function (error) {
         console.error(error);
      });
      axios.get('http://localhost:5000/api/search?after=2022-08-01T00:00:00Z&channel_id=UCeY0bbntWzzVIaj2z3QigXg').then(function (response) {
          setMonthVideosUrl(response.data.videos);
      }).catch(function (error) {
         console.error(error);
      });
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
      setTodayVideos(response.data);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    })
  } , [videosUrl]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos?${weekVideosUrl}`).then(function (response) {
      let arr = [];
      response.data.map(item => {
        if(item.snippet.title.length > 30){
          item.snippet.title = item.snippet.title.substring(0, 30) + "...";
        }
        arr.push(item);
      })
      setWeekVideos(response.data);
      console.log(response.data.items);
    }).catch(function (error) {
      console.error(error);
    })
  } , [weekVideosUrl]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/videos?${monthVideosUrl}`).then(function (response) {
      let arr = [];
      response.data.map(item => {
        if(item.snippet.title.length > 30){
          item.snippet.title = item.snippet.title.substring(0, 30) + "...";
        }
        arr.push(item);
      })
      setMonthVideos(response.data);
      console.log(response.data.items);
    }).catch(function (error) {
      console.error(error);
    })
  } , [monthVideosUrl]);
  setIsOnVideoPage(false);
  return (
    <div className="subscriptions" style={!menu ? {width:'84%'} : {}}>
      <h2>Today</h2>
      <div className="subscriptions__videos">
        {todayVideos.map((video, index) => {
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
      </div>
      <hr/>
      <h2>This Week</h2>
      <div className="subscriptions__videos">
        {weekVideos.map((video, index) => {
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
      </div>
      <hr/>
      <h2>This Month</h2>
      <div className="subscriptions__videos">
        {monthVideos.map((video, index) => {
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
      </div>
    </div>
  );
};
