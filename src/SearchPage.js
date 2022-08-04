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
        image="https://avatars.githubusercontent.com/u/93014692?v=4"
        channel="SugamDev"
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
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
      <VideoRow
        title="How to create a Youtube Clone | 2020"
        views="2.3M"
        timestamp="3 days ago"
        channel="SugamDev"
        subs="660K"
        image="https://img-a.udemycdn.com/course/480x270/1551858_d095_2.jpg"
        description="Nice description for video"
      />
    </div>
  );
};
