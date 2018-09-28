import React, { Component } from "react";
import BookPage from "./containers/BookPage";
import { Switch, Route } from "react-router-dom";
import BookDetail from "./containers/BookPage/components/Detail";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={BookPage} />
          <Route path="/book/:id" component={BookDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
