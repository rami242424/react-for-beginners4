import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");

  // 여러개의 toDo를 받을 수 있는 array 만들기
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === ""){
      return; // toDo에 아무것도 없다면 이 함수는 실행되지 않는다.
    }

    setToDo(""); // toDo값을 수정하는 함수 => toDo = "" 이렇게 직접 수정X
    //js이라면 toDos.push()로 toDo를 toDos에 추가해줬을 것이다 (state에서는 직접수정불가)
    // setToDos(function(currentArray){
    //   return(
    //   );
    // }); // 아래 코드와 같음
    setToDos((currentArray) => [toDo, ...currentArray]); // toDo를 currentArray에 추가함
  }
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
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