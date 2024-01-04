import React, { Suspense, useState } from "react";
import UpcomingCareVisitCard from "./UpcomingCareVisitCard";
import CareVisitsCard from "./CareVisitsCard";
import MoneySpentCard from "./MoneySpentCard";
import MessagePreview from "../../../MessagePreview";
import UpcomingInterviews from "../../../UpcomingInterviews";
import UpcomingEventsPreview from "../../../UpcomingEventsPreview";
import UpcomingVisitsCard from "../../../UpcomingVisitsCard";
import CalendarCollapse from "../../../CalendarCollapse";
import ActiveTimesheets from "../../../ActiveTimesheets";
import CaregiversTableCard from "../../../CaregiversTableCard";

const DashboardPage = () => {
  return (
    <div className="pl-4 pr-12 flex flex-col w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full flex gap-2">
          <div className="w-2/3">
            <div className="flex w-full">
              <UpcomingCareVisitCard />
            </div>
            <div className="mt-4">
              <MoneySpentCard />
            </div>
            <div className="mt-4 w-full">
              <CaregiversTableCard />
            </div>
          </div>
          <div className="w-1/3 border-[#D2D2D2]">
            <CalendarCollapse handleDateClick={() => {}} />
            <UpcomingVisitsCard />
          </div>
        </div>
        <div className="w-full">
          <ActiveTimesheets />
        </div>

        <div className="w-full mt-4">
          <MessagePreview />
        </div>
        <div className="w-full flex gap-4 justify-between mt-4">
          <div className="w-2/3">
            <UpcomingInterviews />
          </div>
          <div className="w-1/3">
            <UpcomingEventsPreview />
          </div>
        </div>
        {/* <MoneySpentCard />
          <CaregiversTableCard />
          <ActiveTimesheets />
          <MessagePreview />
          <div className="flex flex-row gap-[18px]">
            <UpcomingInterviews />
            <UpcomingEventsPreview />
          </div> */}
      </Suspense>
    </div>
  );
};

export default DashboardPage;
