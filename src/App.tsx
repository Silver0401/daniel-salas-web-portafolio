import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import GlobalNav from "./components/nav";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
};

export default App;
