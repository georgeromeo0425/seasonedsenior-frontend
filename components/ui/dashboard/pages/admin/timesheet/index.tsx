import React, { useState } from "react";
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
  const [open, showList] = useState(false);
  return (
    <div className="w-full h-full flex p-4">
      {!open && (
        <div
          className="bg-white w-full h-[100px] px-4 py-6 flex justify-between text-[20px] font-bold cursor-pointer"
          style={{
            border: "0.5px solid var(--Grey-border, #C4C4C4)",
            background: "var(--mainwhite, #FFF)",
          }}
          onClick={() => showList(true)}
        >
          <span className="flex items-center">Pending Timesheet Approval</span>
          <span className="flex items-center">20</span>
        </div>
      )}
      {open && <TimesheetArea />}
    </div>
  );
}
