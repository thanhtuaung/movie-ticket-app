import React from "react";
import useFetch from "../hooks/useFetch";
import MoviesList from "../components/MoviesList";

const AllMovies = () => {
  const {
    data: movieList,
    isPending,
    error,
  } = useFetch("https://movies-data-server.vercel.app/Tbl_MovieList");

  return (
    <div className="container">
      <h4>All Movies</h4>
      <MoviesList movieList={movieList} />
    </div>
  );
};

export default AllMovies;
