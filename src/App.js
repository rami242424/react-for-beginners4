// function component는 function이며, return 후 screen에 표시
// class component는 class이며, React.Component로 부터 확장되며, render method안에 넣어야, screen에 표시
// class component 를 사용해야 되는 이유 => state
// setState : state를 업데이트하고, render function을 호출한다 (렌더링 한다) => setState를 써야하는 이유
// -------------------------
// 문신으로 새겨야 할 만큼 중요한 것!!
// setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.

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
    // console.log("I am doing add");
    // this.state.count = 1; // 이렇게 직접 state를 변경할 수 없다. 왜냐면 react가 render function을 refresh하지 않는다.
    // this.setState({ count : 1 });
    //  this.setState({ count : this.state.count + 1 }); // 이 방식으로 하면 state에 의존하게 되고 다른 곳에서의 업데이트로 인해 문제가 생길 수 있다.
    this.setState((current) => ({ count : current.count + 1 }));

  }

  // minus function
  minus = () => {
    // console.log("I am doing minus");
    // this.state.count = -1; // 이렇게 직접 state를 변경할 수 없다. 왜냐면 react가 render function을 refresh하지 않는다.
    // this.setState({ count : -1 });
    // this.setState({ count : this.state.count - 1 }); // 이 방식으로 하면 state에 의존하게 되고 다른 곳에서의 업데이트로 인해 문제가 생길 수 있다.
    this.setState((current) => ({ count : current.count - 1 })); // this.state => current로 바꿔주기
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

