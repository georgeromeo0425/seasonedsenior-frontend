import React from "react";

import SvgFilter from "@/public/icons/Filter";
import ConditionSelect from "@/components/ui/dashboard/ConditionSelect";
import EventCard from "../../../EventCard";

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
    <div className="flex flex-col px-20">
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
  );
};

export default BrowseEvents;
