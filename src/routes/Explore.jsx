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

  return (
    <div>
      <Header title="Explore Guadalajara" />

      <div className="">
        {exploreData.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 px-6 py-4">
            <h2 className="text-primary-500 text-xl font-bold">{item.title}</h2>

            <div>
              <Swiper spaceBetween={16} slidesPerView={1.6}>
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
