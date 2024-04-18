import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { 
      data: { 
        data: { movies } 
      } 
    }  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
          ) : (
            <div class="movies">
              {movies.map((item) => (
              <Movie 
                key={item.id}
                id={item.id} 
                year={item.year} 
                title={item.title} 
                summary={item.summary} 
                poster={item.medium_cover_image} 
              />
            ))}
            </div>
          )
        }
      </section> 
    );
  }
}

export default App;
