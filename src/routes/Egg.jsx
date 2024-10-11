import React, { useEffect, useState } from "react";
import Creator from "components/Creator";
import javoImage from "assets/creators/javo.png";
import rodImage from "assets/creators/rod.png";
import romiImage from "assets/creators/romi.png";

const Egg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showDebuggerButtons, setShowDebuggerButtons] = useState(false);

  useEffect(() => {
    if (clickCount >= 3) {
      setShowDebuggerButtons(true);
    }
  }, [clickCount]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleSkipWaiting = () => {
    console.log("Skip waiting");

    // this will trigger the "skip waiting" for the service worker that's is pending to be registered so it's registered right away
    navigator.serviceWorker.ready.then((registration) => {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const creators = [
    {
      name: "Javier Ontiveros",
      title: "Developer",
      image: javoImage,
    },
    {
      name: "Rodrigo Méndez",
      title: "Developer",
      image: rodImage,
    },
    {
      name: "Romina Quezada",
      title: "The most awesome designer",
      image: romiImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c445d] to-[#1e6467] text-white">
      <div className="container mx-auto flex flex-col gap-8 px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold leading-normal tracking-wider">
          This project was brought to you by:
        </h1>
        {creators.map((creator, index) => (
          <Creator key={index} {...creator} action={handleClick} />
        ))}

        <h2 className="text-xl font-semibold">Special thanks to:</h2>
        <p>
          Celerino Herrera for Playlist and Content and our QA Testers Adriana
          Quijada, Gabriel Romero, Gisela Morales, Johann Jiménez, José Hugo
          Victoria, Juan Soto and Ulises Vargas.
        </p>

        {showDebuggerButtons && (
          <div>
            <button
              className="btn btn-secondary mt-6"
              onClick={handleSkipWaiting}
            >
              Skip waiting
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Egg;
