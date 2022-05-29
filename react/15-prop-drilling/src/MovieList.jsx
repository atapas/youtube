import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <>
      <h2>Movie List</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
