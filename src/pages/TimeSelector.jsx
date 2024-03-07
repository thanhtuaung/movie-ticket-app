import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const TimeSelector = () => {
  const { movieId, cinemaId, roomId } = useParams();
  const [times, setTimes] = useState(null);
  const [showTimeId, setShowTimeId] = useState(null);

  const {
    data: showDate,
    isPending,
    error,
  } = useFetch(
    `https://movies-data-server.vercel.app/Tbl_MovieShowDate?MovieId=${movieId}&CinemaId=${cinemaId}&RoomId=${roomId}`
  );

  useEffect(() => {
    if (showDate?.length) {
      fetch(
        "https://movies-data-server.vercel.app/Tbl_MovieSchedule?ShowDateId=" +
          showDate[0].ShowDateId
      )
        .then((res) => res.json())
        .then((data) => {
          setTimes(data);
        });
    }
  }, [showDate]);

  return (
    <div className="container">
      <h4>Choose Time</h4>
      {!times && <div>There are no times to show!</div>}
      {times && (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {times.map((time) => (
            <div className="col" key={time.ShowId}>
              <div
                className={`card py-2 px-2 pointer d-flex align-items-center justify-content-center time-card ${
                  showTimeId == time.ShowId && "selected"
                }`}
                onClick={() => {
                  setShowTimeId(time.ShowId);
                }}
              >
                {time.ShowDateTime}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-end py-4">
        <Link
          to={`/movies/${movieId}/cinemas/${cinemaId}/rooms/${roomId}/times/${showTimeId}`}
          className="btn btn-warning"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default TimeSelector;
