import React from "react";
import clsx from "clsx";
import { useContext, useState, useEffect } from "react";
import { AgendaContext } from "routes/Agenda";

import scheduleJson from "assets/data/schedule.json";

function CalendarEvent({ event }) {
  return (
    <div className="grid grid-cols-[80px_auto]">
      <div>
        <p className="text-xs font-semibold">
          {event.allDay ? "All Day" : event.time}
        </p>
        <small className="text-xs font-normal text-slate-500">
          {event.duration || ""}
        </small>
      </div>
      <div className="rounded-lg border-0 border-2 bg-white px-1 py-2">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

function CalendarBlock({ block }) {
  return (
    <div className="border-t pb-2 pt-2 first:border-t-0">
      <h2 className="text-slate-500">{block.name}</h2>
      {block.events.map((event) => (
        <CalendarEvent event={event}></CalendarEvent>
      ))}
    </div>
  );
}

function CalendarList() {
  const { currentDay } = useContext(AgendaContext);
  const [tagDefs, setTagDefs] = useState([]);
  const [dayBlocks, setdayBlocks] = useState([]);

  useEffect(() => {
    let tags = scheduleJson.tags;

    if (!tags) {
      console.error("Bad schedule.json, no tags key found");
      tags = [];
    }

    let days = scheduleJson.data;

    if (!days || !days.length) {
      console.error("Bad schedule.json, invalid data");
      days = [];
    }

    if (days.length < currentDay + 1) {
      console.error("Specified day not found in data");
    }

    const day = days[currentDay]?.blocks || [];

    setTagDefs(tags);
    setdayBlocks(day);
  }, [currentDay]);

  console.log(tagDefs);
  console.log(dayBlocks);

  return (
    <div className="p-6">
      {dayBlocks.map((block) => (
        <CalendarBlock block={block}></CalendarBlock>
      ))}
    </div>
  );
}

export default CalendarList;
