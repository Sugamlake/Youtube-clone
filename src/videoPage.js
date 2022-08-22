import axios from "axios";
import React, { useState, useEffect } from "react";
import { VideoPlayer } from "./videoPlayer";
import "./videoPage.css";
import { Comments } from "./comments";
import { RelatedVideos } from "./relatedVideos";

export const VideoPage = ({ videoId }) => {
    const [video, setVideo] = useState([]);
    const [channel, setChannel] = useState([]);
    const [channelId, setChannelId] = useState("");
    const [comments, setComments] = useState([]);
    const [url, setUrl] = useState("");
    const [relatedVideos, setRelatedVideos] = useState([]);
    useEffect(() => { /* Aqui se hace la consulta para el video que se quiera visualizar*/ 
        axios.get(`http://localhost:5000/api/videos?video_id=${videoId}`).then(function (response) {
          setVideo(response.data);
          console.log(response.data.items);
          console.log(video);
        }).catch(function (error) {
          console.error(error);
        })
        axios.get(`http://localhost:5000/api/search?related=${videoId}`).then(function (response) {
          setUrl(response.data.videos);
          console.log(response.data.items);
          console.log(url);
        }).catch(function (error) {
          console.error(error);
        })
      } , [videoId]);
    useEffect(() => {
      axios.get(`http://localhost:5000/api/videos?${url}`).then(function (response) {
        setRelatedVideos(response.data);
        console.log(response.data.items);
        console.log(relatedVideos);
      }).catch(function (error) {
        console.error(error);
      })
    }, [url]);
    useEffect(() => { /*Aqui se obtienen los datos del canal para mostrarlos en la descripción, nombre y suscriptores etc. */
      setChannelId(video[0]?.snippet.channelId);
      axios.get(`http://localhost:5000/api/channels?channel_id=${channelId}`).then(function (response) {
        setChannel(response.data);
        console.log(response.data.items);
        console.log(channel);
      }).catch(function (error) {
        console.error(error);
      })
    } , [video]);
    useEffect(() => { /*Se obtienen los comentarios del video que se visualiza actualmente */
      axios.get(`http://localhost:5000/api/comments?video_id=${videoId}`).then(function (response) {
        setComments(response.data);
        console.log(response.data.items);
        console.log(comments);
      }).catch(function (error) {
        console.error(error);
      })
    } , [videoId]);
    return (
        <div className="videoPage">
          <div className="videoPage__videos">
            <VideoPlayer 
              title={video[0]?.snippet.title}
              views={video[0]?.statistics.viewCount}
              timestamp={video[0]?.snippet.publishedAt}
              channelImage={channel[0]?.snippet.thumbnails.default.url} /*Aquí puedo cambiar mi foto por la del video original */ 
              // channelImage='https://avatars.githubusercontent.com/u/93014692?v=4' /*Acá puedo poner mi foto */
              channel={channel[0]?.snippet.title}
              player={video[0]?.player.embedHtml.split("src=\"")[1].split("\"")[0]}
              description={{extended: video[0]?.snippet.localized.description, reduced: video[0]?.snippet.description}} 
              subs={channel[0]?.statistics.subscriberCount}
            />
          </div>
          <div>
            {comments.map(comment => (
              <Comments
                key={comment?.id}
                userImage={comment?.snippet.topLevelComment.snippet.authorProfileImageUrl}
                user={comment?.snippet.topLevelComment.snippet.authorDisplayName}
                comment={comment?.snippet.topLevelComment.snippet.textOriginal}
              />
            )) }
            {relatedVideos.map(video => {
              return (
                <RelatedVideos 
                title={video?.snippet.title}
                views={video?.statistics.viewCount}
                timestamp={video?.snippet.publishedAt}
                image={video?.snippet.thumbnails.medium.url}
                channel={video?.snippet.channelTitle}
                link={video?.id}
                />
              )
            })}
          </div>
        </div>
    )
}