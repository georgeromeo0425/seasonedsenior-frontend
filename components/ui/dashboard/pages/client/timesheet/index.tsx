import React, { useState } from "react";
import TimesheetUserCard from "./TimesheetUserCard";
import TimesheetArea from "./TimesheetArea";

const users = [
  {
    name: "Gabby Alao",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Catherin Juan",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Gabby Alao",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Catherin Juan",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Gabby Alao",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Catherin Juan",
    dateRange: "Week: 23-28 Sep, 2023",
  },
  {
    name: "Gabby Alao",
    dateRange: "Week: 23-28 Sep, 2023",
  },
];

export default function TimesheetPage() {
  const [curUser, setCurUser] = useState(-1);
  const [name, setName] = useState("");
  const [daterange, setDateRange] = useState("");
  const handleCardClick = (idx: number, name: string, dateRange: string) => {
    setName(name);
    setDateRange(dateRange);
    setCurUser(idx);
  };
  return (
    <div className="w-full h-full flex bg-white">
      <div
        className="w-[375px] overflow-hidden"
        style={{
          borderRight: "1px solid var(--grey-text, #828282)",
        }}
      >
        <div className="h-full overflow-y-auto">
          {users.map((user, idx) => (
            <TimesheetUserCard
              {...user}
              selected={idx === curUser}
              key={`messages-usercard-${idx}`}
              onCardClick={() =>
                handleCardClick(idx, user.name, user.dateRange)
              }
            />
          ))}
        </div>
      </div>
      <div className="w-[calc(100%-375px)] relative">
        {curUser > -1 && <TimesheetArea name={name} daterange={daterange} />}
      </div>
    </div>
  );
}
