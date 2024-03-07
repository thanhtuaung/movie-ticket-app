import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SeatSelector = () => {
  const { movieId, cinemaId, roomId, timeId } = useParams();
  const [selectdSeats, setSelectedSeats] = useState([]);

  const {
    data: seatList,
    isPending,
    error,
  } = useFetch(
    "https://movies-data-server.vercel.app/Tbl_RoomSeat?RoomId=" + roomId
  );

  const handleSeatSelect = (seatId) => {
    let index = selectdSeats.indexOf(seatId);
    if (index > -1) {
      let newSeatList = selectdSeats.filter(
        (selectedSeatId) => selectedSeatId !== seatId
      );
      setSelectedSeats(newSeatList);
    } else {
      setSelectedSeats([...selectdSeats, seatId]);
    }
  };

  return (
    <div className="container py-5 text-center">
      <h3 className="mb-5">Screen</h3>

      {seatList && (
        <div className="py-2 d-flex gap-1 flex-wrap">
          {seatList.map((seat) => {
            let isSelected = selectdSeats.indexOf(seat.SeatId) > -1;
            return (
              <div
                key={seat.SeatId}
                className={`${seat.SeatNo ? "seat" : "road"} ${
                  seat.SeatType === "couple" && "couple-seat"
                } ${
                  seat.SeatType === "couple" && !seat.SeatNo && "couple-road"
                } ${
                  isSelected && "selected-seat"
                } d-flex align-items-center justify-content-center pointer`}
                onClick={() => handleSeatSelect(seat.SeatId)}
              >
                {seat.SeatNo}
              </div>
            );
          })}

          {/* <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="road"></div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="road"></div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div>
        <div className="seat">1</div> */}
        </div>
      )}
    </div>
  );
};

export default SeatSelector;
