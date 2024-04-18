import React from "react";

class App extends React.Component{
  // constructor 제일 먼저 동작
  // constructor(props){
  //   super(props);
  //   console.log("hello i am a constructor");
  // }
  state = {
    count : 0
  };

  add = () => {
    this.setState((current) => ({ count : current.count + 1 }));
  }

  minus = () => {
    this.setState((current) => ({ count : current.count - 1 })); 
  }

  componentDidMount(){
    console.log("this is from componentDidMount");
  }

  componentDidUpdate(){
    console.log("this is from componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("This is from componentWillUnmount, bye!");
  }

  render() {
    console.log("I am rendering");
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

// mounting (컴포넌트가 mount될 때 & screen에 표시될 떄 & website에 갈 떄)
// - constructor() : 자바스크립트에서 class를 만들 때 호출 (제일먼저 렌더링)
// - render()
// - componentDidMount() : "component가 처음 render 됐어" 라고 알려줌. 즉, render 후 동작 


// updating : state를 변경할 때 
// - render()
// - componentDidUpdate() : state를 업데이트 하면, render 후 동작


// unmounting : change the page 즉, component가 죽었을때 (사용하지않을떄)
