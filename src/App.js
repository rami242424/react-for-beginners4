import { 
  BrowserRouter as Router,
  Switch, // Route 찾는 용도, 한번에 하나의 Route만 렌더링 하기 위해서
  Route, // url
  Link, // 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
  } from "react-router-dom";
  import Home from "./routes/Home";
  import Detail from "./routes/Detail";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>oh hello~~</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/"> {/* component 적는 곳*/}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;