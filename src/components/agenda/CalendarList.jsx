import React from "react";
import clsx from "clsx";
import { useContext, useState, useEffect } from "react";
import { AgendaContext } from "routes/Agenda";

import scheduleJson from "assets/data/schedule.json";

const bgColorMapper = {
  gray: "bg-grayscale-100",
  green: "bg-tertiary-500",
  yellow: "bg-butter-500",
  blue: "bg-secondary-500",
};

const borderColorMapper = {
  gray: "border-grayscale-500",
  green: "border-tertiary-500",
  yellow: "border-butter-500",
  blue: "border-secondary-500",
};

const lightBgColorMapper = {
  gray: "bg-grayscale-50",
  green: "bg-tertiary-50",
  yellow: "bg-butter-50",
  blue: "bg-sky-100",
};

function CalendarTags({ tags }) {
  const [tagDefs, setTagDefs] = useState([]);

  useEffect(() => {
    let tags = scheduleJson.tags;

    if (!tags) {
      console.error("Bad schedule.json, no tags key found");
      tags = [];
    }

    setTagDefs(tags);
  }, []);

  if (!Array.isArray(tags)) {
    tags = [];
  }

  return tags.length ? (
    <div className="flex flex-row pt-4">
      {tags.map((tag) => {
        let borderColor = "border-gray-300";
        let backgroundColor = "bg-gray-100";
        const tagDef = tagDefs.find((td) => td.name === tag);
        if (tagDef) {
          try {
            borderColor = borderColorMapper[tagDef.color];
            backgroundColor = lightBgColorMapper[tagDef.color];
          } catch (err) {
            console.error("Unknown color in data", err);
          }
        }
        return (
          <span
            className={clsx(
              "text-primary-500 mr-3 rounded-full border px-3 py-0.5 text-sm font-light tracking-widest",
              borderColor,
              backgroundColor,
            )}
          >
            {tag}
          </span>
        );
      })}
    </div>
  ) : null;
}

function CalendarEvent({ event }) {
  let color = "bg-red-600";
  try {
    color = event.allDay ? "bg-white" : bgColorMapper[event.color];
  } catch (err) {
    console.error("Unknown color in data", err);
  }

  return (
    <div className="grid grid-cols-[80px_auto] py-1.5">
      <div>
        <p className="text-primary-500 text-sm font-semibold">
          {event.allDay ? "All Day" : event.time}
        </p>
        <small className="text-primary-400 text-sm font-normal">
          {event.duration || ""}
        </small>
      </div>
      <div className="flex flex-row rounded-lg border-0 bg-white px-2 py-2">
        <div
          className={clsx(
            color,
            "mr-4 h-full rounded-lg",
            event.allDay
              ? "min-w-2 border-2 border-gray-300"
              : "min-w-1.5 border-0",
          )}
        ></div>
        <div>
          <h3 className="text-primary-850 text-lg font-semibold">
            {event.title}
          </h3>
          <p className="text-grayscale-450 pt-1 text-base font-normal">
            {event.description}
          </p>
          <CalendarTags tags={event.tags}></CalendarTags>
        </div>
      </div>
    </div>
  );
}

function CalendarBlock({ block }) {
  return (
    <div className="border-t pb-2 pt-2 first:border-t-0">
      {block.name && (
        <h2 className="text-grayscale-450 py-2 text-base font-normal">
          {block.name}
        </h2>
      )}
      {block.events.map((event) => (
        <CalendarEvent event={event}></CalendarEvent>
      ))}
    </div>
  );
}

function CalendarList() {
  const { currentDay } = useContext(AgendaContext);
  const [dayBlocks, setdayBlocks] = useState([]);

  useEffect(() => {
    let days = scheduleJson.data;

    if (!days || !days.length) {
      console.error("Bad schedule.json, invalid data");
      days = [];
    }

    if (days.length < currentDay + 1) {
      console.error("Specified day not found in data");
    }

    const day = days[currentDay]?.blocks || [];

    setdayBlocks(day);
  }, [currentDay]);

  return (
    <div className="p-6">
      {dayBlocks.map((block) => (
        <CalendarBlock block={block}></CalendarBlock>
      ))}
    </div>
  );
}

export default CalendarList;
