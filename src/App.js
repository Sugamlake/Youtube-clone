import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { RecommendedVideos } from "./RecommendedVideos";
import { Switch, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { VideoPage } from "./videoPage";
import { TrendingPage } from "./trendingPage";
import { Subscriptions } from "./subscriptions";
// import { Library } from "./Library";
// import { History} from "./History";
// import {YourVideos} from "./YourVideos";
// import {WatchLater} from "./WatchLater";
// import {LikedVideos} from "./LikedVideos";
// import {ShowMore} from "./ShowMore";


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Switch>
          <Route path="/search/:searchTerm" render={({match})=>{
            return <SearchPage searchTerm={match.params.searchTerm}/>
          }} />
          <Route path="/video/:videoId" render={({match})=>{
            return <VideoPage videoId={match.params.videoId}/>
          }} />
          <Route path="/trending" exact component={TrendingPage} />
          <Route path="/" exact component={RecommendedVideos} />
          <Route path="/Subscriptions" exact component={Subscriptions} />
          {/* <Route path="/Library" exact component={Library} />
          <Route path="/History" exact component={History} />
          <Route path="/Your Videos" exact component={YourVideos} />
          <Route path="/Watch Later" exact component={WatchLater} />
          <Route path="/Liked Videos" exact component={LikedVideos} />
          <Route path="/Show More" exact component={ShowMore} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
