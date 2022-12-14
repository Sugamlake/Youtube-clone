import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import "./VideoPage.css";
import { Comments } from "../Comments/comments";
import { RelatedVideos } from "../RelatedVideos/relatedVideos";
import { VideosContext } from "../../Context/VideosContext";

export const VideoPage = ({ videoId }) => {
  const [video, setVideo] = useState([]);
  const [channel, setChannel] = useState([]);
  const [channelId, setChannelId] = useState("");
  const [comments, setComments] = useState([]);
  const [url, setUrl] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { setIsOnVideoPage, menu } = useContext(VideosContext);
  useEffect(() => {
    /* Aqui se hace la consulta para el video que se quiera visualizar*/
    axios
      .get(`http://localhost:5000/api/videos?video_id=${videoId}`)
      .then(function (response) {
        setVideo(response.data);
        console.log(response.data.items);
        console.log(video);
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .get(`http://localhost:5000/api/search?related=${videoId}`)
      .then(function (response) {
        setUrl(response.data.videos);
        console.log(response.data.items);
        console.log(url);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [videoId]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/videos?${url}`)
      .then(function (response) {
        let arr = [];
        response.data.map((item) => {
          if (item.snippet.title.length > 30) {
            item.snippet.title = item.snippet.title.substring(0, 30) + "...";
          }
          arr.push(item);
        });
        setRelatedVideos(arr);
        console.log(response.data.items);
        console.log(relatedVideos);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [url]);
  useEffect(() => {
    /*Aqui se obtienen los datos del canal para mostrarlos en la descripci??n, nombre y suscriptores etc. */
    setChannelId(video[0]?.snippet.channelId);
    axios
      .get(`http://localhost:5000/api/channels?channel_id=${channelId}`)
      .then(function (response) {
        setChannel(response.data);
        console.log(response.data.items);
        console.log(channel);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [video]);
  useEffect(() => {
    /*Se obtienen los comentarios del video que se visualiza actualmente */
    axios
      .get(`http://localhost:5000/api/comments?video_id=${videoId}`)
      .then(function (response) {
        setComments(response.data);
        console.log(response.data.items);
        console.log(comments);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [videoId]);
  setIsOnVideoPage(true);
  return (
    <div
      className="videoPage"
      style={
        !menu
          ? { width: "100%" }
          : {
              gridTemplateColumns: "auto auto",
              marginLeft: "0",
              paddingLeft: "0",
            }
      }
    >
      <div className="videoPage__videos">
        <VideoPlayer
          title={video[0]?.snippet.title}
          views={video[0]?.statistics.viewCount}
          timestamp={video[0]?.snippet.publishedAt}
          channelImage={
            channel[0]?.snippet.thumbnails.default.url
          } /*Aqu?? puedo cambiar mi foto por la del video original */
          // channelImage='https://avatars.githubusercontent.com/u/93014692?v=4' /*Ac?? puedo poner mi foto */
          channel={channel[0]?.snippet.title}
          player={video[0]?.player.embedHtml.split('src="')[1].split('"')[0]}
          description={{
            extended: video[0]?.snippet.localized.description,
            reduced: video[0]?.snippet.description,
          }}
          subs={channel[0]?.statistics.subscriberCount}
        />
        {comments.map((comment) => (
          <Comments
            key={comment?.id}
            userImage={
              comment?.snippet.topLevelComment.snippet.authorProfileImageUrl
            }
            user={comment?.snippet.topLevelComment.snippet.authorDisplayName}
            comment={comment?.snippet.topLevelComment.snippet.textOriginal}
          />
        ))}
      </div>
      <div className="videoPage__related">
        {relatedVideos.map((video) => {
          return (
            <RelatedVideos
              title={video?.snippet.title}
              views={video?.statistics.viewCount}
              timestamp={video?.snippet.publishedAt}
              channel={video?.snippet.channelTitle}
              image={video?.snippet.thumbnails.medium.url}
              link={video?.id}
              menu={menu}
            />
          );
        })}
      </div>
    </div>
  );
};
