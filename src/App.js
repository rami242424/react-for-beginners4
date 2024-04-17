import { useState , useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL the API");
  }, []);

  // [keyword]가 변화할 때만 코드를 실행하고, 그게 아니면 첫 렌데링이후에 실행되지 않는다.
  useEffect(() => {
    console.log("Search for", keyword);
  }, [keyword]);


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