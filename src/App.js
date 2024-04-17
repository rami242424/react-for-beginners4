import { useEffect, useState } from "react";


function App() {
  // loading = data, setLoading = data를 수정할 수 있는 함수
  // setLoading 함수를 실행하면, component가 다시 render한다.
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect 기본 useEffect(() => {}, [])
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => {
        setMovies(json.data.movies)
        setLoading(false);
      });
  }, [])
  console.log(movies);

  return(
    <div>
      { loading ? <h1>Loading</h1> : null }
    </div>
  );
}

export default App;