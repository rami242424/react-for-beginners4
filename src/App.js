// 특정 코드들이 첫번째 component render에서만 실행되게 하는 방법
// ex) 똑같은 API를 렌더링 할때마다(다른 state를 업데이트 할때마다) 계속 불러오는 것 -> 속도가 느려질 수 있는 원인이 된다.

import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;