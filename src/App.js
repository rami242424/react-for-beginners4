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
      <Food name="kimchi" />
      <div className="hello"></div>
    </div>
  )
}

export default App;