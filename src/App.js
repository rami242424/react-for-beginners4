import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
    }  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);

    // 첫번째 movies = state 의 movies
    // 두번째 movies = axios 의 movies
    // this.setState({ movies : movies });
    // but ec6 는 이해하고 짧게 하길 선호하기에 아래코드도 가능
    this.setState({ movies, isLoading : false }); // 하나의 setState에서 state에 있는 두 개의 상태를 변경했다
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
    <div>
      {isLoading ? (
        "Loading..."
        ) : (
      
          movies.map(item => {
            console.log(item);
            return(
            <Movie id={item.id} year={item.year} title={item.title} summary={item.summary} poster={item.medium_cover_image} />
            );

          })


        )
      }
    </div> 
    );
  }
}

export default App;
