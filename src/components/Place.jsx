import React from "react";
import useImage from "src/utils/hooks/useImage";

const Place = ({ place }) => {
  const { image } = useImage(place.hero);

  return (
    <div className="mb-6 w-52">
      <div className="flex flex-col gap-1 overflow-hidden rounded-lg bg-white shadow-lg">
        <img src={image} className="h-[88px] w-full object-cover" alt="" />
        <div className="relative p-2">
          <h3 className="top-[120px] text-sm font-bold">{place.name}</h3>
          <p>{place.description}</p>
          <a
            className="text-sm text-secondary-500 underline"
            target="_blank"
            rel="noreferrer"
            href={place.link}
          >
            {place.linkTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Place;
