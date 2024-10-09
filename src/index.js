import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "routes/Home";
import Footer from "components/Footer";
import Agenda from "routes/Agenda";
import Explore from "routes/Explore";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Possible routes, Root, Agenda, Explore, Help, Not found
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/help",
        element: <App />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
