import React from "react";
import wguLogo from "src/assets/images/wgu-logo.svg";
import heroImage2 from "src/assets/images/hero-home-2.jpg";
import heroImage3 from "src/assets/images/home-hero-3.jpg";
import WeatherWidget from "src/components/Weather";
import NoticeBanner from "src/components/NoticeBanner";
import PushNotificationsRequest from 'src/components/PushNotificationsRequest';

function Home() {
  return (
    <div>
      <div className="absolute min-h-[400px] w-full bg-[url('assets/images/home-hero-wgu-summit.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:top-0 after:z-0 after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:to-black"></div>
      <div className="container relative z-10 mx-auto flex flex-col gap-4 px-6 py-6 pt-44 text-white">
        <img src={wguLogo} alt="WGU Logo" className="w-32" />
        <h1 className="headline-1">Guadalajara Summit</h1>
        <p className="headline-2 !font-normal">{new Date().toDateString()}</p>
        <div className="mb-4 rounded-lg bg-white bg-opacity-90 px-6 py-3 text-slate-500">
          <WeatherWidget />
        </div>
      </div>

      <div>
        <NoticeBanner />
      </div>

      <div className="bg-white pt-8">
        <div className="container mx-auto flex flex-col gap-2 px-6">
          <h3 className="headline-3 text-blue-950">Welcome to WIS Summit!</h3>
          <p>
            We're pleased to have you join us in Guadalajara for four days of
            insightful presentations and collaboration with our organization's
            leaders. This app is designed to keep you informed with the summit
            agenda and provide helpful resources to guide your experience.
          </p>
        </div>

        <img
          src={heroImage2}
          alt="WGU WIS Team - Monterrey 2024"
          className="mb-8 mt-6 w-full"
        />
      </div>

      {/* <div>
        <PushNotificationsRequest />
      </div> */}

      <div className="bg-white pt-8">
        <div className="container mx-auto flex flex-col gap-2 px-6">
          <h3 className="headline-3 text-blue-950">
            Guadalajara, La Perla Tapatía
          </h3>
          <p>
            Guadalajara is also known as the ZMG, which stands for “Zona
            Metropolitana de Guadalajara” (Guadalajara Metropolitan Area in
            Spanish). The ZMG is the most populous metropolitan area in the
            state of Jalisco and the third largest in Mexico, after Greater
            Mexico City and Monterrey. Guadalajara is often referred to as the
            "Silicon Valley of Mexico" due to its thriving tech industry and
            innovation hubs. It's also renowned for hosting the prestigious
            Guadalajara International Book Fair, the largest of its kind in the
            Spanish-speaking world. The city is as well famous for its vibrant
            film and arts festivals, making it a key cultural destination in
            Mexico.
          </p>
        </div>
        <img
          src={heroImage3}
          alt="Guadalajara, Jalisco"
          className="mt-6 w-full"
        />
      </div>

      {/* <div className="bg-secondary-700">
        <div className="container">
          <div className="flex flex-col gap-2 px-6 py-4 text-white">
            <h3 className="headline-3">Guadalajara's Rhythm</h3>
            <p>
              Experience the rhythm of Guadalajara with this handpicked playlist
              of local bands.
            </p>
            <a
              href="https://open.spotify.com/playlist/4WLApWE34EOB4nmGJcnydm?si=5a8dbc4e414f47eb"
              target="_blank"
              rel="noreferrer"
              className="btn btn-link"
            >
              Listen now
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
