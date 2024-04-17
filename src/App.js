import { useEffect, useState } from "react";


function App() {
  // loading = data, setLoading = data를 수정할 수 있는 함수
  // setLoading 함수를 실행하면, component가 다시 render한다.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);

  return(
    <div>
      { loading ? (
        <h1>Loading</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <div 
                key={movies.id}
              >
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>



        ) }
    </div>
  );
}

export default App;