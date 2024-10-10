import React from "react";
import { createContext, useState } from "react";
import Header from "components/Header";
import DayPicker from "components/agenda/DayPicker";
import CalendarList from "components/agenda/CalendarList";

export const AgendaContext = createContext(null);

function Agenda() {
  const [currentDay, setCurrentDay] = useState(0);

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
