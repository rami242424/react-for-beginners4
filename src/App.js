// 특정 코드들이 첫번째 component render에서만 실행되게 하는 방법
// =>> useEffect 사용
// 필요한 이유 ex) 똑같은 API를 렌더링 할때마다(다른 state를 업데이트 할때마다) 계속 불러오는 것 -> 속도가 느려질 수 있는 원인이 된다.
// useEffect( 딱 한번만 실행하고 싶은 코드, deps?: DependencyList )


import { useState , useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  
  // useEffect 사용해보기
  console.log("I run all the time");
  // 표현빙식 1
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once");
  // }
  // useEffect(iRunOnlyOnce, []);

  // 표현방식 2
  useEffect(() => {
    console.log("CALL the API");
  }, []);



  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;