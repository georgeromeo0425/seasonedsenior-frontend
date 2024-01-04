import DatePickerCom from "@/components/ui/auth/client/DatePickerCom";
import CalendarCollapse from "@/components/ui/dashboard/CalendarCollapse";
import React, { useState } from "react";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import MyServices from "./MyServices";
import TaskManagement from "./TaskManagement";

export default function ServicesPage() {
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
          My Services
        </div>
        <div
          className="cursor-pointer"
          style={curTabIndex == 1 ? activeStyle : {}}
          onClick={handleBillingTab}
        >
          Task Management
        </div>
      </div>
      <div>{curTabIndex == 0 ? <MyServices /> : <TaskManagement />}</div>
    </div>
  );
}
