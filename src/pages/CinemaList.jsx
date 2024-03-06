import React, { useEffect, useState } from "react";
import themeg from "../assets/themeg.jpg";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const CinemaList = () => {
  const { id } = useParams();
  const [cinemaId, setCinemaId] = useState(1);
  const [cinemaRooms, setCinemaRooms] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const {
    data: movie,
    isPending,
    error,
  } = useFetch("https://movies-data-server.vercel.app/Tbl_MovieList/" + id);

  const { data: cinemaList } = useFetch(
    "https://movies-data-server.vercel.app/Tbl_CinemaList/"
  );

  useEffect(() => {
    fetch(
      "https://movies-data-server.vercel.app/Tbl_CinemaRoom?CinemaId=" +
        cinemaId
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCinemaRooms(data);
      });
  }, [cinemaId]);

  const handleCinemaChange = (id) => {
    setCinemaId(id);
  };

  const handleRoomChange = (id) => {
    setRoomId(id);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="movie-image-container text-center">
            <img src={themeg} alt="..." />
          </div>
        </div>
        <div className="col-lg-6">
          {movie && (
            <div>
              <h4>{movie.MovieTitle}</h4>
              <p>{movie.ReleaseDate}</p>
              <p>{movie.Duration}</p>
            </div>
          )}
        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg-6">
          <h4 className="py-3">Cinemas</h4>
          {cinemaList && (
            <div>
              {cinemaList.map((cinema) => (
                <div
                  key={cinema.CinemaId}
                  className={`card py-2 px-5 mb-2 pointer card-hover ${
                    cinema.CinemaId == cinemaId && "selected-item"
                  }`}
                  onClick={() => {
                    handleCinemaChange(cinema.CinemaId);
                  }}
                >
                  {cinema.CinemaName}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-6">
          <h4 className="py-3">Rooms</h4>
          {cinemaRooms && (
            <div className="row row-cols-1 row-cols-md-2 g-2">
              {cinemaRooms.map((room) => (
                <div className="col" key={room.id}>
                  <div
                    className={`card py-2 pointer d-flex align-items-center justify-content-center room-hover ${
                      roomId == room.id && "room-selected"
                    }`}
                    onClick={() => {
                      handleRoomChange(room.id);
                    }}
                  >
                    {room.RoomName}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-end">
        <Link
          to={`/movies/${id}/cinemas/${cinemaId}/rooms/${roomId}`}
          href=""
          className="btn btn-warning"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default CinemaList;
