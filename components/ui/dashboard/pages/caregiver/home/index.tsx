import React, { Suspense, useState } from "react";
import UpcomingCareVisitCard from "./UpcomingCareVisitCard";
import CareVisitsCard from "./CareVisitsCard";
import MoneySpentCard from "./MoneySpentCard";
import MessagePreview from "../../../MessagePreview";
import UpcomingInterviews from "../../../UpcomingInterviews";
import UpcomingEventsPreview from "../../../UpcomingEventsPreview";

const DashboardPage = () => {
  return (
    <div className="pl-4 pr-12 flex flex-col w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full">
          <div className="flex-1 m-4">
            <UpcomingCareVisitCard />
          </div>
          <div className="flex-1 m-4">
            <CareVisitsCard />
          </div>
        </div>
        <div className="mt-4">
          <MoneySpentCard />
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
