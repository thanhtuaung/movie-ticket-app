import React from "react";
import useFetch from "../hooks/useFetch";
import MoviesList from "./MoviesList";

const TrendMovies = () => {
  const {
    data: movieList,
    isPending,
    error,
  } = useFetch("https://movies-data-server.vercel.app/Tbl_MovieList");

  return (
    <div className="container my-4">
      <h4 className="pb-3">Trend Movies</h4>
      <MoviesList movieList={movieList} />
    </div>
  );
};

export default TrendMovies;
