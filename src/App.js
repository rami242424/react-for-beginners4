// 6.4 recap
// react.js에서 가장 멋진 점 
// 1. component를 refresh (새로운 데이터가 들어올 때 마다 자동으로 ul를 refresh 한다.)
// 2. 변화가 일어난 때만 refresh한다.
// But component안에 딱 한번만 실행하고 싶은 코드가 있을 수 있거나, component안에 특정 데이터가 변화할 때 만 실행하고 싶을 수 있다. => 코드가 언제 실행 될지 직접 정할 수 있다. => useEffect 사용
// useEffect( 실행시키고 싶은 코드 , react.js가 지켜봐야하는 것(이것이 변화하면 코드실행) )

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

  // keyword 와 counter가 바뀔때 실행
  useEffect(() => {
    console.log("I run when [keyword] & [counter] change!!");
  }, [keyword, counter]);


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