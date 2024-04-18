// Link는 라우터 안에 있어야 한다. 따라서 App.js에서 Navigation도 Route 안에 있어야한다.

import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" component={Home} exact={true}/>
        <Route path="/home/detail" component={Detail} exact={true}/>
        <Route path="/about" component={About} exact={true}/>
      </HashRouter>
      <footer></footer>
    </>
  );
}

export default App;