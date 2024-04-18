import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }

  // async => getMovies 함수가 비동기라고 표시해줌
  // getMovies는 api로 데이터를 받아오느라 시간이 좀 소요되니, 기다려라!
  // await => axios가 끝날때 까지 기다렸다가 계속하렴!
  // async & await : javaScript에게 "getMovies 함수에게 조금 시간이 필요하고, 우리는 그걸 기다려야한다!"" 라고 말하는 것
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);

    // // ec6를 적용하여 더 간결하게 표현하면
    // const { data: { data: { movies } } }  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // console.log(movies);

    const { 
      data: { 
        data: { movies } 
      } 
    }  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
    <div>
      {isLoading ? "Loading..." : "We are Ready!!" }
    </div> 
    );
  }
}

export default App;
