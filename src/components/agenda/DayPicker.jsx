import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { AgendaContext } from "routes/Agenda";

function DayPicker() {
  const { currentDay, setCurrentDay } = useContext(AgendaContext);

  const days = ["MON,\nOCT 14", "TUE,\nOCT 15", "WED,\nOCT 16", "THU,\nOCT 17"];

  return (
    <div className="grid grid-cols-4 gap-6 p-6 text-gray-500">
      {days.map((day, i) => (
        <button
          className={clsx(
            "rounded-lg border-2 bg-white pb-3 pt-3 text-center",
            currentDay === i && "border-blue-900 text-blue-900",
          )}
          onClick={() => setCurrentDay(i)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default DayPicker;
