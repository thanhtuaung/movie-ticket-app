import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// library imports
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import CinemaList from "./pages/CinemaList";
import TimeSelector from "./pages/TimeSelector";
import SeatSelector from "./pages/SeatSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <AllMovies />,
      },
      {
        path: "/movies/:id",
        element: <CinemaList />,
      },
      {
        path: "/movies/:movieId/cinemas/:cinemaId/rooms/:roomId",
        element: <TimeSelector />,
      },
      {
        path: "/movies/:movieId/cinemas/:cinemaId/rooms/:roomId/times/:timeId",
        element: <SeatSelector />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
