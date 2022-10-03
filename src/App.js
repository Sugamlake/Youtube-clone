import React, { useContext } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { RecommendedVideos } from "./components/RecommendedVideos/RecommendedVideos";
import { Switch, Route } from "react-router-dom";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { VideoPage } from "./components/VideoPage/VideoPage";
import { TrendingPage } from "./components/TrendingPage/TrendingPage";
import { Subscriptions } from "./components/Subscriptions/Subscriptions";
import { Library } from "./components/Library/Library";
import { History } from "./components/History/History";
import { WatchLater } from "./components/WatchLater/WatchLater";
import { LikedVideos } from "./components/LikedVideos/LikedVideos";
import { ShowMore } from "./ShowMore";
import { VideosContext } from "./Context/VideosContext";
import { ShortsPage } from "./components/ShortsPage/ShortsPage";

function App() {
  const { menu, isOnVideoPage } = useContext(VideosContext);
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Switch>
          <Route
            path="/search/:searchTerm"
            render={({ match }) => {
              return <SearchPage searchTerm={match.params.searchTerm} />;
            }}
          />
          <Route
            path="/video/:videoId"
            render={({ match }) => {
              return <VideoPage videoId={match.params.videoId} />;
            }}
          />
          <Route path="/trending" exact component={TrendingPage} />
          <Route path="/" exact component={RecommendedVideos} />
          <Route path="/Subscriptions" exact component={Subscriptions} />
          <Route path="/Shorts" exact component={ShortsPage} />
          <Route path="/Library" exact component={Library} />
          <Route path="/History" exact component={History} />
          <Route path="/Watch Later" exact component={WatchLater} />
          <Route path="/Liked Videos" exact component={LikedVideos} />
          <Route path="/Show More" exact component={ShowMore} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
