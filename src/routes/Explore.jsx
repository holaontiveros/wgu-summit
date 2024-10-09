import Header from "components/Header";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import exploreJson from "assets/data/explore.json";

import Place from "components/Place";
import "swiper/css";

const Explore = () => {
  const [exploreData, setExploreData] = useState([]);

  useEffect(() => {
    setExploreData(exploreJson.data);
  }, []);

  // get screen width and assign the slidesPerView based on it
  const [slidesPerView, setSlidesPerView] = useState(1.2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 330) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 380) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth < 480) {
        setSlidesPerView(1.6);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2.5);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3.5);
      } else {
        setSlidesPerView(4.5);
      }
    };

    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView();

    return () => window.removeEventListener("resize", updateSlidesPerView);
  });

  return (
    <div>
      <Header title="Explore Guadalajara" />

      <div className="">
        {exploreData.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 px-6">
            <h2 className="text-xl font-bold text-primary-500">{item.title}</h2>

            <div>
              <Swiper spaceBetween={16} slidesPerView={slidesPerView}>
                {item.places.map((place, index) => (
                  <SwiperSlide key={index}>
                    {place && <Place place={place} />}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
