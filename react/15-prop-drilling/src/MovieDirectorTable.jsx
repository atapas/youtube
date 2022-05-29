import MovieDirectorRow from "./MovieDirectorRow";

const MovieDirectorTable = ({ directors }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Director</th>
          <th>Total Movies</th>
          <th>Total Runtime</th>
          <th>Average Runtime</th>
        </tr>
      </thead>
      <tbody>
        {directors.map((director) => (
          <MovieDirectorRow key={director.director} director={director} />
        ))}
      </tbody>
    </table>
  );
};

export default MovieDirectorTable;
