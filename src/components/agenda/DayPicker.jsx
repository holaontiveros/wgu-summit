import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { AgendaContext } from "src/routes/Agenda";
import scheduleJson from "assets/data/schedule.json";
import { TZDate } from "@date-fns/tz";


function DayPicker() {
  const { currentDay, setCurrentDay } = useContext(AgendaContext);

  const days = scheduleJson.data.reduce((acc, item) => {
    const date = new TZDate(item.date, { timeZone: "America/Mexico_City" });

    const day = date.toLocaleString("en-US", { weekday: "short" }).toUpperCase();
    const dateStr = date.toLocaleString("en-US", { month: "short", day: "2-digit" }).toUpperCase();
    acc.push({ day, date: dateStr });
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 pb-2 pl-6 pr-6 pt-2 text-gray-500">
      {days.map((day, i) => (
        <button
          key={i}
          className={clsx(
            "rounded-lg border-2 bg-white pb-3 pt-3 text-center text-sm",
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
