import React,{useState, useEffect, useContext} from "react";
import "./Subscriptions.css";
import { VideoCard } from "../VideoCard/VideoCard";
import axios from "axios";
import { VideosContext} from '../../Context/VideosContext';


export const Subscriptions = () => { //Acá se le cambia el nombre con el mismo del import de app.js
  const [todayVideos, setTodayVideos] = useState([]);
  const [videosUrl, setVideosUrl] = useState('');
  const [weekVideos, setWeekVideos] = useState([]);
  const [weekVideosUrl, setWeekVideosUrl] = useState([]);
  const [monthVideos, setMonthVideos] = useState([]);
  const [monthVideosUrl, setMonthVideosUrl] = useState([]);
  const {menu, setIsOnVideoPage} = useContext(VideosContext);
  
  const getWeek = () => {
    let today = new Date();
    let day = today.getDay();
    let diff = today.getDate()-day + (day === 0 ? -6 : 1);
    let weekStart = new Date(today.setDate(diff)).toISOString();
    return weekStart
  }
  console.log(getWeek())

  const getMonth = () => {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let dateString = `${year}-${month}-01T00:00:00.000Z`
    return dateString
  }

  useEffect(() => {
      axios.get('http://localhost:5000/api/search?order=date&channel_id=UCeY0bbntWzzVIaj2z3QigXg').then(function (response) {
          setVideosUrl(response.data.videos);
      }).catch(function (error) {
         console.error(error);
      });
      axios.get(`http://localhost:5000/api/search?after=${getWeek()}&channel_id=UCeY0bbntWzzVIaj2z3QigXg`).then(function (response) {
          setWeekVideosUrl(response.data.videos);
          console.log(response.data.videos);
      }).catch(function (error) {
         console.error(error);
      });
      axios.get(`http://localhost:5000/api/search?after=${getMonth()}&channel_id=UCeY0bbntWzzVIaj2z3QigXg`).then(function (response) {
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
