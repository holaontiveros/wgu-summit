import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { AgendaContext } from "routes/Agenda";

function DayPicker() {
  const { currentDay, setCurrentDay } = useContext(AgendaContext);

  const days = [
    { day: "MON", date: "OCT 14" },
    { day: "TUE", date: "OCT 15" },
    { day: "WED", date: "OCT 16" },
    { day: "THU", date: "OCT 17" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 pb-2 pl-6 pr-6 pt-2 text-gray-500">
      {days.map((day, i) => (
        <button
          className={clsx(
            "rounded-lg border-2 bg-white pb-3 pt-3 text-center text-lg",
            currentDay === i
              ? "border-primary-500 text-primary-500"
              : "border-grayscale-100 text-grayscale-500",
          )}
          onClick={() => setCurrentDay(i)}
        >
          <div>{day.day},</div>
          <div>{day.date}</div>
        </button>
      ))}
    </div>
  );
}

export default DayPicker;
