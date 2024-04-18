// function component는 function이며, return 후 screen에 표시
// class component는 class이며, React.Component로 부터 확장되며, render method안에 넣어야, screen에 표시
// class component 를 사용해야 되는 이유 => state
import React from "react";

// class => javascript 
class App extends React.Component{
  // state 는 object이며, component의 data를 넣을 공간이 있고, 데이터는 변한다.
  // state : 바꾸고 싶은 data를 넣는 곳
  // 아래의 코드와 작업들은 component의 data를 바꾸기 위해서 하고 있다.
  state = {
    count : 0
  };

  // add function
  add = () => {
    console.log("I am doing add");
  }

  // minus function
  minus = () => {
    console.log("I am doing minus");
  }




  render() {
    return (
    <div>
      <h1>The number is : {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div> 
    );
  }
}

export default App;