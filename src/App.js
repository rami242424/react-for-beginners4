import React from "react";

function Food({ fav }){ 
  // console.log(props);
  return (
    <h2>Food i love {fav}</h2>
  );
}

function App() {
  return (
    <div>
      <h1>i am in App@!!</h1>
      <Food fav="kimchi" /> 
      <Food fav="kimbab" /> 
      <Food fav="hamburger" /> 
      <Food fav="mando" /> 

    </div>
  )
}

export default App;