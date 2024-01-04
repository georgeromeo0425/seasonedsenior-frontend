import { time } from "console";
import { createContext } from "react";

interface TimeEntryContextValue {
  dayOfWeek: string[];
  setDayOfWeek: React.Dispatch<React.SetStateAction<string[]>>;
  timeFrom: number;
  setTimeFrom: React.Dispatch<React.SetStateAction<number>>;
  timeTo: number;
  setTimeTo: React.Dispatch<React.SetStateAction<number>>;
}

const TimeEntryContext = createContext<TimeEntryContextValue>({
  dayOfWeek: [],
  setDayOfWeek: () => {},
  timeFrom: -1,
  setTimeFrom: () => {},
  timeTo: -1,
  setTimeTo: () => {},
});

export default TimeEntryContext;
