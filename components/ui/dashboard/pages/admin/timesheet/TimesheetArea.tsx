import React, { useState } from "react";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import Image from "next/image";
import sm_avatar from "@/public/avatars/sample.png";
import SeasonedLogoModal from "../../../Modals/SeasonedLogoModal";

interface AdminPendingTimeSheetItem {
  name: string;
  date: string;
  workHours: number;
  client: string;
  comments: string;
}

const fakeData: AdminPendingTimeSheetItem[] = [
  {
    name: "Kimberly Asha",
    date: "23/09/23",
    workHours: 8,
    client: "Gabby Alao",
    comments: "He came in 3 hours",
  },
  {
    name: "Frank Sergio",
    date: "23/09/23",
    workHours: 8,
    client: "Gabby Alao",
    comments: "No comment",
  },
  {
    name: "Frank Sergio",
    date: "23/09/23",
    workHours: 8,
    client: "Gabby Alao",
    comments: "He came in 3 hours late",
  },
];

const CaregiverCard = (props: any) => {
  return (
    <div className="flex flex-col px-8 py-4 gap-y-2 bg-white">
      <div>
        <span className="text-[20px] font-bold">Caregiver: </span>
        <span className="font-bold">{props.name}</span>
      </div>
      <span>Date: {props.date}</span>
      <span>Hours worked: {props.workHours}</span>
      <span>Client: {props.client}</span>
      <span>Comments: {props.comments}</span>
      <div className="mt-4 flex justify-between">
        <span
          className="px-12 py-2 rounded-md text-white cursor-pointer bg-success"
          onClick={props.handleApprove}
        >
          Approve
        </span>
        <span className="px-12 py-2 rounded-md text-white cursor-pointer bg-brightRedColor">
          Reject
        </span>
      </div>
    </div>
  );
};

export default function TimesheetArea() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col px-4 gap-y-2">
      {fakeData.map((item, idx) => (
        <CaregiverCard
          key={`admin-timesheet-pending-list`}
          {...item}
          handleApprove={() => setOpen(true)}
        />
      ))}
      <SeasonedLogoModal
        open={open}
        onClose={() => setOpen(false)}
        content={
          <div className="flex flex-col items-center gap-y-2 px-24">
            <Image
              alt="logo"
              src={sm_avatar}
              width={60}
              className="rounded-full m-4"
              style={{ height: "auto" }}
            />
            <span className="font-bold text-primary text-[20px] text-center">
              Kimberly Asha
            </span>
            <span className="font-bold text-textdarkColor text-center">
              Timesheet Approved
            </span>
          </div>
        }
        footer={
          <PrimaryButton handleClick={() => setOpen(false)}>Ok</PrimaryButton>
        }
      />
    </div>
  );
}
