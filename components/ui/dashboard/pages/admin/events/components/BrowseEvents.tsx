import React from "react";

import SvgFilter from "@/public/icons/Filter";
import ConditionSelect from "@/components/ui/dashboard/ConditionSelect";
import EventCard from "../../../EventCard";
import { Pagination } from "@mui/material";
import RowSelection from "@/components/ui/dashboard/RowsSelection";

const eventsData = [
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
  {
    creator: "Seasoned senior",
    name: "Oldies Hangout",
    fee: 320,
    date: "10 Nove, 2023",
    time: "03:32 PM",
  },
];

const BrowseEvents = () => {
  return (
    <div className="h-full flex flex-col px-20 justify-between">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <ConditionSelect
            icon={<SvgFilter />}
            method="filter"
            by="All"
            choices={["All", "Free", "Paid", "Ongoing", "Past Events"]}
          />
        </div>
        <div className="flex justify-between">
          {eventsData.map((item, index) => (
            <EventCard
              key={index}
              creator={item.creator}
              name={item.name}
              fee={item.fee}
              date={item.date}
              time={item.time}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center justify-between">
          <span className="text-textdarkColor w-[130px] mr-2 font-arial">
            1 to 1 4 records
          </span>
          <RowSelection />
          <span className="text-textdarkColor w-[130px] ml-2 font-arial">
            items per page
          </span>
        </div>
        <Pagination count={1} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default BrowseEvents;
