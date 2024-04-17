import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === ""){
      return; // toDo에 아무것도 없다면 이 함수는 실행되지 않는다.
    }
    setToDo(""); // toDo값을 수정하는 함수
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do.." 
          />
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default App;