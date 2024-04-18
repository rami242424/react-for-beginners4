import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/home/detail" component={Detail} exact={true}/>
      <Route path="/about" component={About} exact={true}/>
    </HashRouter>
    
  );
}

export default App;