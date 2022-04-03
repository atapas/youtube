import withFetch from "./WithFetch";

const MovieAnalytics = (props) => {
  const { movies } = props;
  return (
    <div className="movie-container">
      <h2>Movie Analytics - With HoC</h2>
      {/*
        Do something about showing movie analytics
        here. You can group the movie data by director
        information and show that in a table.
      */}
    </div>
  )
};
const HOC = withFetch(MovieAnalytics);
export default HOC;