import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";
import { Agenda, Egg, Explore, Help, Home, WeatherWeek } from "src/routes";
// import * as serviceWorkerRegistration from "src/serviceWorkerRegistration";
import { registerSW } from "virtual:pwa-register";

const contentCachedEvent = new Event("contentCached");
const updateAvailableEvent = new Event("updateAvailable");

registerSW({
  immediate: true,
  onOfflineReady: () => document.dispatchEvent(contentCachedEvent),
  onNeedRefresh: () => document.dispatchEvent(updateAvailableEvent),
});

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
        element: <Help />,
      },
      {
        path: "/egg",
        element: <Egg />,
      },
      {
        path: "/weather",
        element: <WeatherWeek />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
