import { useState , useEffect } from "react";

function Hello() {
  function destroyedFn(){
    console.log("Destroyed :(");
  }

  function effectFn() {
    console.log("Created :)");
    return destroyedFn;
  }

  // 방법1
  // useEffect(effectFn, []);
  // 방법2
  // useEffect(() => {
  //   console.log("Created :)");
  //   return function(){
  //     console.log("Destroyed :(");
  //   }
  // }, []);
  // 방법3 ( 더 잘쓰이는 방법)
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :(");
  }, []);

  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
    </div>
  );
}

export default App;