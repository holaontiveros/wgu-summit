import React from "react";
import useImage from "utils/hooks/useImage";

const Place = ({ place }) => {
  const { loading, error, image } = useImage(place.hero);

  return (
    <div className="w-52 overflow-hidden rounded-lg bg-white">
      <div className="flex flex-col gap-1">
        <img src={image} className="h-[88px] w-full object-cover" alt="" />
        <div className="p-2">
          <h3 className="text-sm font-bold">{place.name}</h3>
          <p>{place.description}</p>
          <a className="text-secondary-500 text-sm underline" href={place.link}>
            {place.linkTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Place;
