import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      {/* 방법1
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/detail">
        <h1>Detail</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
      <Route path="/home" component={Home} exact={true}/>
      <Route path="/home/detail" component={Detail} exact={true}/>
      <Route path="/about" component={About} exact={true}/>
    </HashRouter>
    
  );
}

export default App;