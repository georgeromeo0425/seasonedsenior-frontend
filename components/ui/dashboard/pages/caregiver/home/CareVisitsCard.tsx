import React, { useState } from "react";
import { Paper } from "@mui/material";
import { CalendarIcon } from "@/components/ui/common/Icons";

const CareVisitsCard = () => {
  return (
    <Paper className="flex flex-col w-full h-full p-4">
      <span className="font-bold text-[16px]">Upcoming Care Visit</span>

      <div className="mt-8 flex gap-4">
        <div className="flex flex-col flex-1 p-4 bg-[#F6F6F6] rounded-lg">
          <div>
            <CalendarIcon className="text-primary" />
            <span className="ml-2">Today</span>
          </div>
          <div>
            <span className="text-[24px] font-bold text-textdarkColor">1</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4 bg-[#F6F6F6] rounded-lg">
          <div>
            <CalendarIcon className="text-primary" />
            <span className="ml-2">This week</span>
          </div>
          <div>
            <span className="text-[24px] font-bold text-textdarkColor">12</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CareVisitsCard;
