import React from "react";

function Food(props){ // props : fav, something, pepapa 다 들어있음 
  
  console.log(props);

  return (
    <h2>Food i love to eat</h2>
  );
}

function App() {
  return (
    <div>
      <h1>i am in App</h1>
      <Food 
        fav="kimchi" 
        something={true}
        pepapa={["hello", 1, 2, 3, true]}
      /> 
      {/* fav, something, pepapa 는 food 함수 컴포넌트에 인자(argument)로 넣는다 => props */}


    </div>
  )
}

export default App;