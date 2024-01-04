import React, { useContext, useState } from "react";
import MyServices from "./MyServices";
import ServiceManagement from "./ServiceManagement";
import { SetCrumbContext } from "@/components/layouts/dashboard/Layout";

export default function ServicesPage() {
  const [curTabIndex, setCurTabIndex] = useState(1);

  const activeStyle = {
    color: "#CB5A6F",
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const setBreadCrumb = useContext(SetCrumbContext);

  const handleSummaryTab = () => {
    setCurTabIndex(0);
    setBreadCrumb("Reports > Services summary report");
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
          Services
        </div>
        <div
          className="cursor-pointer"
          style={curTabIndex == 1 ? activeStyle : {}}
          onClick={handleBillingTab}
        >
          Manage Services
        </div>
      </div>
      <div>{curTabIndex == 0 ? <MyServices /> : <ServiceManagement />}</div>
    </div>
  );
}
