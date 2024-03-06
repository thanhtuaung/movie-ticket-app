import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const TimeSelector = () => {
  const { movieId, cinemaId, roomId } = useParams();
  const [times, setTimes] = useState(null);

  const {
    data: showDate,
    isPending,
    error,
  } = useFetch(
    `https://movies-data-server.vercel.app/Tbl_MovieShowDate?MovieId=${movieId}&CinemaId=${cinemaId}&RoomId=${roomId}`
  );

  useEffect(() => {
    if (showDate) {
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

      {times && (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {times.map((time) => (
            <div className="col">
              <div
                key={time.ShowId}
                className="card py-2 px-2 d-flex align-items-center justify-content-center"
              >
                {time.ShowDateTime}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
