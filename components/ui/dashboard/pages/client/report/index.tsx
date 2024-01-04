import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import CalendarCollapse from "@/components/ui/dashboard/CalendarCollapse";
import React, { useState } from "react";
import ServiceSummaryReport from "./ServiceSummaryReport";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import BillingStatement from "./BillingStatement";
import DatePicker from "../../../DatePicker";

export default function ReportPage() {
  const [curTabIndex, setCurTabIndex] = useState(0);

  const activeStyle = {
    color: "#CB5A6F",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const handleSummaryTab = () => {
    setCurTabIndex(0);
  };

  const handleBillingTab = () => {
    setCurTabIndex(1);
  };

  return (
    <div className="bg-[#FAFAFB] w-full flex flex-col">
      <div className="flex justify-center gap-10">
        <div
          className="cursor-pointer"
          style={curTabIndex == 0 ? activeStyle : {}}
          onClick={handleSummaryTab}
        >
          Service Summary Report
        </div>
        <div
          className="cursor-pointer"
          style={curTabIndex == 1 ? activeStyle : {}}
          onClick={handleBillingTab}
        >
          Billing Statements
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-center">
        <span className="text-center font-bold text-[24px]">
          Please select a date range
        </span>
        <div className="flex justify-center gap-x-5">
          <div className="mt-8 flex flex-col">
            <div className="text-black font-bold">From</div>
            <DatePicker title="Start Date" />
          </div>
          <div className="mt-8 flex flex-col">
            <div className="text-black font-bold">To</div>
            <DatePicker title="End Date" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <PrimaryButton href="">Generate Report</PrimaryButton>
        </div>
      </div>
      <div>
        {curTabIndex == 0 ? <ServiceSummaryReport /> : <BillingStatement />}
      </div>
    </div>
  );
}
