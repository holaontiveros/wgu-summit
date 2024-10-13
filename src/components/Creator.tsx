import React from "react";

const Creator = ({ name, image, title, action }) => {
  return (
    <div className="flex items-center gap-4" onClick={action}>
      <img
        className="rounded-full"
        src={image}
        width="100"
        height="100"
        alt=""
      />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Creator;
