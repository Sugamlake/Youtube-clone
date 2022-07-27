import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link
          to="/"
          onClick={() => {
            setInputSearch("");
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/YouTube_icon.png/800px-YouTube_icon.png"
            alt="logo youtube"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`} className="header__linkButton">
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Restaurant"
          src="../assets/la_marca.jpeg"
        />
      </div>
      {/* <div className="navbar__center__container">
        <input type="text" className="navbar__search__input" />
      </div>
      <div className="navbar__right__container">
        <p>Right side</p>
      </div> */}
    </div>
  );
};
