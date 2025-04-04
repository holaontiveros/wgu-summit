import React from "react";
import { createContext, useState, useEffect } from "react";
import Header from "src/components/Header";
import DayPicker from "src/components/agenda/DayPicker";
import CalendarList from "src/components/agenda/CalendarList";

export const AgendaContext = createContext(null);

function Agenda() {
  const defaultDate = { value: 0 };
  const [currentDay, setCurrentDay] = useState(defaultDate.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentDay]);

  return (
    <div className="min-h-screen">
      <AgendaContext.Provider
        value={{
          currentDay,
          setCurrentDay,
        }}
      >
        <div className="sticky top-0 bg-primary-250">
          <Header title="Summit Agenda" />
          <DayPicker></DayPicker>
        </div>
        <CalendarList></CalendarList>
      </AgendaContext.Provider>
    </div>
  );
}

export default Agenda;
