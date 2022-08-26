import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { ChannelRow } from "./ChannelRow";
import { VideoRow } from "./VideoRow";

export const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars2.githubusercontent.com/u/32638444?s=460&u=7f980bc423bf06977334433b7cd3a2110a1171b3&v=4"
        channel="ANaranjoDev"
        verified
        subs="660K"
        noOfVideos={382}
        description="Nice description"
      />
      <hr />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="ANaranjoDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
    </div>
  );
};
