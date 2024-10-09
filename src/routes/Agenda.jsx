import React from "react";
import { createContext, useState } from "react";
import DayPicker from "components/agenda/DayPicker";

export const AgendaContext = createContext(null);

function Agenda() {
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <div className="h-screen bg-slate-100">
      <AgendaContext.Provider
        value={{
          currentDay,
          setCurrentDay,
        }}
      >
        <DayPicker></DayPicker>
      </AgendaContext.Provider>
    </div>
  );
}

export default Agenda;
