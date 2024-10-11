import "./App.css";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";
import React, { createContext, useState, useCallback, useEffect } from "react";
import useEventListener from "utils/hooks/useEventListener";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export const WeatherContext = createContext(null);

const UpdateAvailableToastMsg = () => {
  const handleSkipWaiting = () => {
    // this will trigger the "skip waiting" for the service worker that's is pending to be registered so it's registered right away
    navigator.serviceWorker.ready.then((registration) => {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="flex items-center gap-6" onClick={handleSkipWaiting}>
      <div className="h-full bg-secondary-500 p-4">
        <ArrowPathIcon className="h-6 w-6 text-white" />
      </div>
      <p className="text-sm">
        An update for the app is ready. <strong>Tap here to refresh now</strong>{" "}
        and enjoy the latest content!
      </p>
    </div>
  );
};

function App() {
  const [weather, setWeather] = useState(null);

  useEventListener(
    "updateAvailable",
    () => {
      toast(<UpdateAvailableToastMsg />, {
        position: "bottom-center",
        autoClose: true,
        closeOnClick: false,
        draggable: false,
      });
    },
    document,
  );

  useEventListener(
    "contentCached",
    () => {
      toast("Content is cached for offline use 😎", {
        position: "bottom-center",
        autoClose: true,
        closeOnClick: true,
        draggable: false,
      });
    },
    document,
  );

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      <div className="flex min-h-screen flex-col bg-primary-250">
        <ScrollToTop />
        <Outlet />
        <ToastContainer />
        <Footer />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
