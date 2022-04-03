import withFetch from "./WithFetch";

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div className="movie-container">
      <h2>Movie List - With HoC</h2>
      {
        <ul>
        {movies.map((movie, index) =>(
          <li key={index}>
            <img src={movie.poster} alt={movie.title} />
            <span>{movie.title}</span>
          </li>
        ))}
        </ul>
      }
    </div>
  )
};
const HOC = withFetch(MovieList);
export default HOC;