import CustomSelection from "@/components/ui/auth/client/CustomSelection";
import DurationPane from "@/components/ui/auth/client/DurationPane";
import InputField from "@/components/ui/auth/client/InputField";
import { MoneysIcon, WalletIcon } from "@/components/ui/common/Icons";
import TimeEntryContext from "@/contexts/TimeEntryContext";
import { Avatar } from "@mui/material";
import { TimeIcon } from "@mui/x-date-pickers";
import React, { useContext, useState } from "react";

const timeItems = [
  "0 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "0 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const InfoComp = ({
  description,
  info,
  icon,
  color,
}: {
  description: string;
  info: string;
  icon: any;
  color: string;
}) => {
  return (
    <div className="flex items-center">
      <div className={`p-2 rounded-full`} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="ml-4 flex flex-col">
        <span className="text-[#828282]">{description}</span>
        <span className="text-[#282828] font-bold">{info}</span>
      </div>
    </div>
  );
};

const TimeSheetReviewItem = (props: any) => {
  const [timeTo, setTimeTo] = useState<number>(-1);
  const [timeFrom, setTimeFrom] = useState<number>(-1);

  const handleSetTimeTo = (to: number) => {
    setTimeTo(to);
  };

  const handleSetTimeFrom = (from: number) => {
    setTimeFrom(from);
  };

  const getDuration = () => {
    const duration = timeTo - timeFrom;
    if (duration > 0) return duration;
    else return 0;
  };

  return (
    <div
      className="m-4 p-4 bg-white flex flex-col gap-y-4"
      style={{
        border: "0.4px solid var(--Grey-border, #C4C4C4",
      }}
    >
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-4">
          <span className="font-bold text-[20px]">Date: Mon, 23/09/23</span>
          <span className="">Hours Worked: 8hours</span>
        </div>
        <div className="flex gap-x-4 ml-auto">
          <div className="flex-1">
            <DurationPane name="Duration" duration={getDuration()} />
          </div>
          <div className="flex-1 w-[160px]">
            <CustomSelection
              label="From"
              name="Time"
              items={timeItems}
              onChange={handleSetTimeFrom}
            />
          </div>
          <div className="flex-1 w-[160px]">
            <CustomSelection
              label="To"
              name="Time"
              items={timeItems}
              onChange={handleSetTimeTo}
            />
          </div>
        </div>
      </div>
      <div>
        <InputField
          type="text"
          title=""
          placholder="No comment"
          multiline={true}
          rows={4}
          value={props.comment}
          handleChange={() => {}}
        />
      </div>
      <div className="ml-4 text-success">Submitted</div>
    </div>
  );
};

export default function TimesheetArea({
  name,
  daterange,
}: {
  name: string;
  daterange: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmitAllclicked = () => {
    setModalOpen(true);
  };

  return (
    <div className="bg-blurColor h-full flex flex-col">
      <div className="px-4 py-2 flex justify-between border border-solid border-[#C4C4C4]">
        <div className="flex items-center font-bold">
          <span>{daterange}</span>
        </div>
        <div className="ml-2 flex items-center">
          <Avatar
            alt="Remy Sharp"
            src="/public/avatars/sample.png"
            sx={{ width: 48, height: 48 }}
          />
          <div className="ml-2 font-bold">{name}</div>
        </div>
        <div className="ml-2 flex items-center font-bold text-primary">
          <span>{"Rate/hr: $10/hr"}</span>
        </div>
        <div className="m-4 flex">
          <button
            className="px-8 py-2 rounded-md bg-primary"
            style={{ color: "white" }}
            onClick={handleSubmitAllclicked}
          >
            Submit all
          </button>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="flex justify-between">
          <InfoComp
            description="Hours worked this week:"
            info="40 hours 32 minutes"
            icon={<TimeIcon className={`text-white text-3xl`} />}
            color="#C75167"
          />
          <InfoComp
            description="Payment this week:"
            info="$430.00"
            icon={<WalletIcon className={`text-white text-3xl`} />}
            color="#4285F4"
          />
          <InfoComp
            description="Total payment so far:"
            info="$4290.00"
            icon={<MoneysIcon className={`text-white text-3xl`} />}
            color="#30A64A"
          />
        </div>
      </div>
      <div className="flex flex-col flex-auto overflow-auto">
        {["", "", "", "", "", "", ""].map((item, idx) => (
          <TimeSheetReviewItem key={`timesheetreviewitem-${idx}`} />
        ))}
      </div>
    </div>
  );
}
