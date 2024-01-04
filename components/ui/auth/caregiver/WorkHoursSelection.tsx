"use client";

import React, { useState } from "react";
import Image from "next/image";

const WorkHoursSelection = ({
  timetype,
  start,
  end,
  index,
}: {
  timetype: string;
  start: number;
  end: number;
  status: boolean;
  index: number;
}) => {
  const getTimeString = (time: number) => {
    const timeVal = time > 12 ? time - 12 : time;
    const suffix = time > 12 ? "PM" : "AM";
    return `${timeVal}:00 ${suffix}`;
  };

  const [status, setStatus] = useState(false);

  return (
    <div
      className="flex cursor-pointer p-2"
      style={{
        border: "1px solid var(--Grey-border, #C4C4C4)",
      }}
      onClick={(e) => {
        setStatus(!status);
      }}
    >
      <div className="w-full">
        <div>
          <input
            type="radio"
            className="accent-[#CB5A6F] w-4 h-4 text-textdarkColor bg-gray-100 border-gray-300 "
            name={`planradio${index}`}
            checked={status}
          />
        </div>
        <div className="flex flex-col mx-2">
          <p className="text-lg text-center font-bold leading-5 text-textdarkColor mb-2">
            {timetype}
          </p>
          <p className="text-sm text-center font-light leading-5 text-textdarkColor">
            {`${getTimeString(start)} - ${getTimeString(end)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHoursSelection;
