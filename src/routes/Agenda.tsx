import React from "react";
import { createContext, useState, useEffect } from "react";
import Header from "src/components/Header";
import DayPicker from "src/components/agenda/DayPicker";
import CalendarList from "src/components/agenda/CalendarList";

export const AgendaContext = createContext(null);

function Agenda() {
  const today = new Date().getDate();
  const defaultDate = { value: 0 };
  
  switch(today) {
    case 15:
      defaultDate.value = 1;
      break;
    case 16:
      defaultDate.value = 2;
      break;
    case 17:
      defaultDate.value = 3;
      break;
    default:
      defaultDate.value = 0;
      break;
  }

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
