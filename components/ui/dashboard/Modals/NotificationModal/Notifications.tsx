import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import NewMessageItem from "./NewMessageItem";
import RescheduleItem from "./RescheduleItem";
import PaymentItem from "./PaymentItem";
import TimesheetItem from "./TimesheetItem";
import NewServiceItem from "./NewEventItem";
import NewEventItem from "./NewEventItem";

const Notifications = () => {
  return (
    <div
      className="w-[550px] h-5/6 text-2xl text-black rounded"
      style={{
        background: "white",
        backgroundImage: "url('/images/logo.png')",
        backgroundPosition: "center",
        backgroundSize: "80% auto",
        backgroundRepeat: "no-repeat",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between p-5 border border-l-0 border-t-0 border-r-0 border-b-1 border-borderGreyColor">
        <p className="text-base font-bold">Notifications</p>
        <SettingsIcon />
      </div>
      <div className="overflow-auto h-5/6">
        <NewMessageItem
          from="Frank Sergio"
          isViewed={false}
          time={"30 minutes ago"}
        />
        <RescheduleItem
          actor={"Ashley Kimmy"}
          date={"Thursday - 23 Oct, 2023"}
          time={"30 minutes ago"}
        />
        <PaymentItem from="Gabby Alao" amount={9500} time={"30 minutes ago"} />
        <TimesheetItem actor="Ben Franklin" time="30 minutes ago" />
        <NewServiceItem name="Meal Preparation" time="30 minutes ago" />
        <NewEventItem name="Chrismas Party" time="30 minutes ago" />
      </div>
      <div className="flex justify-center">
        <p className="text-[#F4AAB7] font-bold text-base py-4 select-none cursor-pointer">
          Clear all notification
        </p>
      </div>
    </div>
  );
};

export default Notifications;
