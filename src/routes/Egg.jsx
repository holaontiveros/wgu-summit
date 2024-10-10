import React, { useEffect, useState } from "react";

const Egg = () => {
  const [permisionResult, setPermisionResult] = useState(null);

  const askForNotificationPermission = async () => {
    console.log("Asking for notification permission");

    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        setPermisionResult("Permission granted");
      } else if (result === "denied") {
        setPermisionResult("Permission denied");
      } else {
        setPermisionResult("Permission dismissed");
      }
    });
  };

  const handleSkipWaiting = () => {
    console.log("Skip waiting");

    // this will trigger the "skip waiting" for the service worker that's is pending to be registered so it's registered right away
    navigator.serviceWorker.ready.then((registration) => {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-500">
      <h1 className="mb-28 text-8xl">🐔🥚</h1>
      Current permission result: {permisionResult && <p>{permisionResult}</p>}
      <button
        className="btn btn-secondary"
        onClick={askForNotificationPermission}
      >
        Ask for notificationsn permission
      </button>
      <button
        className="btn btn-secondary"
        onClick={askForNotificationPermission}
      >
        Ask for notificationsn permission
      </button>
    </div>
  );
};

export default Egg;
