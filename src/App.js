import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { RecommendedVideos } from "./RecommendedVideos";
import { Switch, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <Switch>
          <Route path="/search/:searchTerm" component={SearchPage} />
          <Route path="/" exact component={RecommendedVideos} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
