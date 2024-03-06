import React from "react";
import themeg from "../assets/themeg.jpg";
import { Link } from "react-router-dom";

const MoviesList = ({ movieList }) => {
  return (
    <div className="">
      {movieList && (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movieList.map((movie) => (
            <div className="col">
              <Link to={`/movies/${movie.id}`}>
                <div className="card h-100 border-0 movie-item">
                  <div className="movie-image-container">
                    <img src={themeg} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{movie.MovieTitle}</h5>
                    <p className="card-text">
                      Duration: {movie.Duration} hours
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
