import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css";
import { Header } from "./header";
import { Gallery } from "./gallery";
import { GalleryItem } from "./gallery-item";

export function App() {
  return (
    <Router>
      <div className="app container">
        <Header />
        <div className="main">
          <Switch>
            <Route path="/item/:id" component={GalleryItem} />
            <Route path="/" component={Gallery} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
