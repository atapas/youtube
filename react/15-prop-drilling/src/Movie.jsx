import MovieRating from "./MovieRating";

const Movie = ({ movie }) => {
  const { id, poster, title, director, year, rating } = movie;

  return (
    <li className="movie" key={id}>
      <img src={poster} alt={title} />
      <p>
        {title} by {director} was released on {year}
      </p>
      <MovieRating rating={rating} />
    </li>
  );
};

export default Movie;
