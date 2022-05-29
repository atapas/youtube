import MovieDirectorTable from "./MovieDirectorTable";

const MovieAnalytics = ({ data }) => {
  const groupedMovies = groupBy(data, "director");
  const allDirectors = Reflect.ownKeys(groupedMovies);

  function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  }

  const directors = allDirectors.map((director) => {
    const movies = groupedMovies[director];
    const totalMovies = movies.length;
    const totalRuntime = movies.reduce(
      (total, movie) => total + movie.runtime,
      0
    );
    const averageRuntime = totalRuntime / totalMovies;
    return {
      director,
      totalMovies,
      totalRuntime,
      averageRuntime,
    };
  });
  return (
    <>
      <h2>Movie Analytics</h2>
      <div className="movie-container">
        <MovieDirectorTable directors={directors} />
      </div>
    </>
  );
};

export default MovieAnalytics;
