import { MoneysIcon, WalletIcon } from "@/components/ui/common/Icons";
import { ArrowBack, ArrowForward, PropaneSharp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, IconButton, InputBase } from "@mui/material";
import { TimeIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";

const fakeData = [
  {
    date: "Mon 23/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Approved",
  },
  {
    date: "Mon 24/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "He came 3hrs Late",
    status: "Pending",
  },
  {
    date: "Mon 25/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Pending",
  },
  {
    date: "Mon 26/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Pending",
  },
  {
    date: "Mon 27/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Pending",
  },
  {
    date: "Mon 28/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Pending",
  },
  {
    date: "Mon 29/09/23",
    timeIn: "12:30",
    timeOut: "18:30",
    comment: "",
    status: "Pending",
  },
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

const TimesheetDateItem = (props: any) => {
  return (
    <div className="w-full flex justify-around items-center py-2 gap-x-8">
      <div className="flex items-center flex-2">
        <span className="text-[20px] text-textdarkColor font-bold">
          {props.date}
        </span>
      </div>
      <div className="flex gap-x-2 flex-6 text-distlineColor">
        <div className="flex flex-1 flex-col border border-solid border-distlineColor bg-white px-4 py-2 gap-y-1">
          <span>Time In</span>
          <span className="font-bold text-[18px]">{props.timeIn}</span>
        </div>
        <div className="flex flex-1 flex-col border border-solid border-distlineColor bg-white px-4 py-2 gap-y-1">
          <span>Time Out</span>
          <span className="font-bold text-[18px]">{props.timeOut}</span>
        </div>
        <div className="flex flex-3 flex-col border border-solid border-distlineColor bg-white px-4 py-2 gap-y-1">
          <span>Client Comment</span>
          <span className="font-bold text-[18px]">
            {props.comment === "" ? "No comment" : props.comment}
          </span>
        </div>
      </div>
      <div className="flex items-center flex-3">
        {props.status === "Approved" ? (
          <span className="font-bold text-[18px] text-success">Approved</span>
        ) : (
          <span className="font-bold text-[18px] text-[#EDBB2A]">
            Pending Approval
          </span>
        )}
      </div>
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
  return (
    <div className="h-full flex flex-col">
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
        <div className="ml-2 flex items-center font-bold text-[#CB5A6F]">
          <span>{"Rate/hr: $10/hr"}</span>
        </div>
        <div className="ml-2 flex">
          <div className="flex items-center">
            <span className="rounded-lg px-1 py-1.5 border border-solid border-[#C4C4C4]">
              <ArrowBack />
            </span>
            <span className="ml-2 rounded-lg px-1 py-1.5 border border-solid border-[#C4C4C4]">
              <ArrowForward />
            </span>
          </div>
          <div className="px-2 ml-2 flex justify-between border w-[250px] h-[60px] rounded-lg">
            <InputBase
              className="font-bold"
              sx={{ color: "rgba(0, 0, 0, 0.87)", width: "220px" }}
              value={"10-09-2023 - 17-09-2023"}
              placeholder="Global search"
            />
            <IconButton type="submit">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-auto py-4 bg-blurColor overflow-auto">
        <div className="px-8 flex justify-between">
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
        <div className="flex-auto px-8 py-4 mt-4 flex flex-col bg-white overflow-auto">
          {fakeData.map((item, idx) => (
            <TimesheetDateItem key={`timesheetdateitem-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
