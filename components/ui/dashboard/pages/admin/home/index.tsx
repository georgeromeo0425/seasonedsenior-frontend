import React, { Suspense, useState } from "react";
import UpcomingCareVisitCard from "./UpcomingCareVisitCard";
import MoneySpentCard from "./MoneySpentCard";
import UpcomingInterviews from "../../../UpcomingInterviews";
import UpcomingEventsPreview from "../../../UpcomingEventsPreview";
import CaregivernumCard from "./components/CaregivernumCard";
import ClientnumCard from "./components/ClientnumCard";
import ViewapplicationCard from "./components/ViewapplicationCard";
import Requests from "./components/Requests";
import Userchart from "./components/Userchart";
import FilteredTable from "./components/FilteredTable";
import ContractCard from "./components/ContractCard";
import NotificationModal from "../../../Modals/NotificationModal/NotificationModal";

const DashboardPage = () => {
  return (
    <div className="pl-4 pr-12 flex flex-col w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center gap-x-4 h-[390px]">
          <div className="w-1/4 flex flex-col gap-y-2 justify-between">
            <div className="grow">
              <CaregivernumCard num={68} />
            </div>
            <div className="grow">
              <ClientnumCard num={1000} />
            </div>
          </div>
          <div className="w-1/3">
            <ViewapplicationCard />
          </div>
          <div className="w-5/12">
            <div className="">
              <Requests />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 mt-4">
          <div className="w-1/2 ">
            <Userchart />
          </div>
          <div className="w-1/2 ">
            <ContractCard />
          </div>
        </div>
        <div className=" w-full mt-4">
          <MoneySpentCard />
        </div>

        <div className="w-full flex gap-4 justify-between mt-8">
          <div className="w-2/3">
            <UpcomingInterviews />
          </div>
          <div className="w-1/3">
            <UpcomingEventsPreview />
          </div>
        </div>
        <div className="flex justify-normal items-center   gap-6 mx-10">
          <div className="text-[20px] text-[#282828] font-bold">
            Background Checks
          </div>
          <div
            className="text-[16px] text-[#CB5A6F]"
            style={{ borderBottom: "2px solid", borderBottomColor: "#F9FAFB" }}
          >
            All Checks
          </div>
          <div className="text-[16px] text-[#CB5A6F]">Pending Checks</div>
          <div className="text-[16px] text-[#CB5A6F]">Completed Checks</div>
        </div>
        <div className="w-full">
          <FilteredTable filterValue={0} />
        </div>
        {/* <MoneySpentCard />
          <CaregiversTableCard />
          <ActiveTimesheets />
          <MessagePreview />
          <div className="flex flex-row gap-[18px]">
            <UpcomingInterviews />
            <UpcomingEventsPreview />
          </div> */}
        {/* <NotificationModal name={""} open={false} setOpen={() => {}} /> */}
      </Suspense>
    </div>
  );
};

export default DashboardPage;
