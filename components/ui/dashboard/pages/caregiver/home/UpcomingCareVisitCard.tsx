import React, { useState } from "react";
import Image from "next/image";
import mdmd_avatar from "@/public/avatars/sample.png";
import SmRoundedBtn from "../../../SmRoundedBtn";
import { Paper } from "@mui/material";
import { ClockIcon } from "@mui/x-date-pickers";

const UpcomingCareVisitCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Paper className="flex flex-col w-full h-full p-4">
      <span className="font-bold text-[16px]">Upcoming Care Visit</span>
      <div
        style={{ border: "0.699px solid rgba(196, 196, 196, 0.30)" }}
        className="flex p-4"
      >
        <Image
          className="rounded-xl"
          style={{
            border: "2px solid rgba(255, 114, 140, 0.99)",
            width: "80px",
            height: "80px",
          }}
          alt="appointment card avatar"
          src={mdmd_avatar}
          priority={false}
        />
        <div className="ml-4 flex flex-col w-full">
          <div className="flex flex-row flex-wrap items-center">
            <span className="font-bold text-[18px]">Pamela Sandals</span>
            <div className="flex flex-row ml-auto gap-1">
              {["Housekeeping", "Meal Preparation", "+3"].map((item, index) => {
                return (
                  <SmRoundedBtn key={`sm_rounded_btn_${index}`} value={item} />
                );
              })}
            </div>
          </div>
          <div className="mt-2">
            <span className="text-distlineColor text-[14px] mr-[14px]">
              76yrs/old
            </span>
            <span className="text-distlineColor text-[14px] mr-[14px]">
              Maryland lane, Arizona, USA.
            </span>
            <span className="text-distlineColor text-[14px] mr-[14px]">
              12miles away
            </span>
            <span className="text-distlineColor text-[14px] mr-[14px]">
              $12 - 35/hr.
            </span>
          </div>
          <div className="mt-2 flex items-center text-distlineColor">
            <ClockIcon />
            <span className="ml-2">Mon, Aug 30, 09:00am - 3:30pm</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default UpcomingCareVisitCard;
