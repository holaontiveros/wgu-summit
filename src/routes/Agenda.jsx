import React from "react";
import { createContext, useState } from "react";
import Header from "components/Header";
import DayPicker from "components/agenda/DayPicker";
import CalendarList from "components/agenda/CalendarList";

export const AgendaContext = createContext(null);

function Agenda() {
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <div>
      <Header title="Summit Agenda" />

      <AgendaContext.Provider
        value={{
          currentDay,
          setCurrentDay,
        }}
      >
        <DayPicker></DayPicker>
        <CalendarList></CalendarList>
      </AgendaContext.Provider>
    </div>
  );
}

export default Agenda;
