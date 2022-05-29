const MovieDirectorRow = ({ director }) => {
  const {
    director: name,
    totalMovies,
    totalRuntime,
    averageRuntime,
  } = director;
  return (
    <tr>
      <td>{name}</td>
      <td>{totalMovies}</td>
      <td>{totalRuntime}</td>
      <td>{averageRuntime}</td>
    </tr>
  );
};

export default MovieDirectorRow;
