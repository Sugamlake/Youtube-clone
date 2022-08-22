import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import { SidebarRow } from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import {Link} from "react-router-dom";
import {Avatar} from "@material-ui/core";
import axios from "axios";

export const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/subscriptions?channel_id=UCeY0bbntWzzVIaj2z3QigXg').then(function (response) {
      setChannels(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } , []);
  return (
    <div className="sidebar">
      <Link to="/" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow selected title="Home" Icon={HomeIcon} />
      </Link>
      <Link to="/trending" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Trending" Icon={WhatshotIcon} />
      </Link>
      <Link to = "/subscriptions" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
      </Link>
      <hr />
      <Link to = "/Library" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      </Link>
      <Link to = "/History" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="History" Icon={HistoryIcon} />
      </Link>
      <Link to = "/Your Videos" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Your videos" Icon={OndemandVideoIcon} />
      </Link>
      <Link to = "/Watch Later" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Watch later" Icon={WatchLaterIcon} />
      </Link>
      <Link to = "/Liked Videos" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
      </Link>
      <Link to = "/Show more" style = {{textDecoration:"none", color:"black"}}>
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      </Link>
      <hr />
      <h3>Subscriptions</h3>
      <hr />
      {channels.map(channel => {
        console.log(channel?.snippet.thumbnails.medium.url);
        return <Avatar src={channel?.snippet.thumbnails.medium.url} />
      })}
    </div>
  );
};
