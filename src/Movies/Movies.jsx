import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./styles.css";
import movies1 from "./movies1";
class Movies extends React.Component {
  state = { ...movies1 };
  getMovie = movie => {
    return (
      <Movie banner={movie.banner} likes={movie.likes} name={movie.name} />
    );
  };
  render() {
    return (
      <div className="movie-section">
        {Object.keys(this.state).map(x => {
          return this.getMovie(this.state[x]);
        })}
      </div>
    );
  }
}

export default Movies;
