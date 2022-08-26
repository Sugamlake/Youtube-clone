import React, {useEffect, useState, useContext} from "react";
import "./Sidebar.css";
import { SidebarRow } from "../SidebarRow/SidebarRow";
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
import {VideosContext} from "../../Context/VideosContext";

export const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/subscriptions?channel_id=UCeY0bbntWzzVIaj2z3QigXg').then(function (response) {
      setChannels(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  } , []);
  const { menu, isOnVideoPage } = useContext(VideosContext);
  if(!isOnVideoPage){
    return menu ? (
      <div className="sidebar">
        <Link to="/" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow selected title="Home" Icon={HomeIcon} expand={menu} />
        </Link>
        <Link to="/trending" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow title="Trending" Icon={WhatshotIcon} expand={menu} />
        </Link>
        <Link to = "/subscriptions" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} expand={menu}/>
        </Link>
        <hr />
        <Link to = "/Library" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Library" Icon={VideoLibraryIcon} expand={menu}/>
        </Link>
        <Link to = "/History" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="History" Icon={HistoryIcon} expand={menu} />
        </Link>
        <Link to = "/Your Videos" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Your videos" Icon={OndemandVideoIcon} expand={menu}/>
        </Link>
        <Link to = "/Watch Later" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Watch later" Icon={WatchLaterIcon} expand={menu}/>
        </Link>
        <Link to = "/Liked Videos" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} expand={menu}/>
        </Link>
        <Link to = "/Show more" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} expand={menu}/>
        </Link>
        <hr />
        <h3>Subscriptions</h3>
        <hr />
        {channels.map(channel => {
          console.log(channel?.snippet.thumbnails.medium.url);
          return <Avatar src={channel?.snippet.thumbnails.medium.url} />
        })}
      </div>
    ) : (
      <div className="sidebar" style={{width:'6%', overflow:'hidden'}}>
        <Link to="/" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow selected title="Home" Icon={HomeIcon} expand={menu} />
        </Link>
        <Link to="/trending" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow title="Trending" Icon={WhatshotIcon} expand={menu} />
        </Link>
        <Link to = "/subscriptions" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} expand={menu}/>
        </Link>
        <hr />
        <Link to = "/Library" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Library" Icon={VideoLibraryIcon} expand={menu}/>
        </Link>
      </div>
    )
  } else {
    return menu ? (
      <div className="sidebar">
        <Link to="/" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow selected title="Home" Icon={HomeIcon} expand={menu}/>
        </Link>
        <Link to="/trending" style = {{textDecoration:"none", color:"black"}}>
          <SidebarRow title="Trending" Icon={WhatshotIcon} expand={menu}/>
        </Link>
        <Link to = "/subscriptions" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} expand={menu}/>
        </Link>
        <hr />
        <Link to = "/Library" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Library" Icon={VideoLibraryIcon} expand={menu}/>
        </Link>
        <Link to = "/History" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="History" Icon={HistoryIcon} expand={menu}/>
        </Link>
        <Link to = "/Your Videos" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Your videos" Icon={OndemandVideoIcon} expand={menu}/>
        </Link>
        <Link to = "/Watch Later" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Watch later" Icon={WatchLaterIcon} expand={menu}/>
        </Link>
        <Link to = "/Liked Videos" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} expand={menu}/>
        </Link>
        <Link to = "/Show more" style = {{textDecoration:"none", color:"black"}}>
        <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} expand={menu}/>
        </Link>
        <hr />
      </div>
    ) : null;
  }
};
