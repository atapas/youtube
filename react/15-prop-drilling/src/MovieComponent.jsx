import { movies } from "./data/movies.js";
import MovieList from "./MovieList";
import MovieAnalytics from "./MovieAnalytics";
import "./movies.css";

const fetchMovieData = () => {
  return movies;
};

const MovieComponent = () => {
  const movieData = fetchMovieData();

  return (
    <div className="movie-container">
      <MovieList movies={movieData} />
      <MovieAnalytics data={movieData} />
    </div>
  );
};

export default MovieComponent;
