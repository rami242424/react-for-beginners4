import React from "react";

function Food(){
  return (
    <h2>Food i love to eat</h2>
  );
}

function App() {
  return (
    <div>
      <h1>i am in App</h1>
      <Food fav="kimchi" /> 
      {/*food component에 fav라는 이름의 property를 kimchi라는 value로 줌*/}
    </div>
  )
}

export default App;