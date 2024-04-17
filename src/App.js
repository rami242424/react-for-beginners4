// 6.2 Deps : 언제 코드가 실행 될지 결정하는 방법을 배움
// 1. 컴포넌트가 생성되는 첫 시작점
// 2. 무언가 update 될때 코드 실행 && 특정한 keyword가 updater 될때만 코드 실행

import { useState , useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // 기본
  console.log("I run all the time");

  // 한번만 실행
  useEffect(() => {
    console.log("I run only ONCE");
  }, []);

  // keyword가 바뀔때 실행
  useEffect(() => {
      console.log("I run only [keyword] changes");
  }, [keyword]);

  // counter가 바뀔때 실행
  useEffect(() => {
    console.log("I run when [counter] changes");
  }, [counter]);


  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;