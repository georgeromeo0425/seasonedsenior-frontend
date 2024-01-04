import React from "react";
import CustomizedLineChart from "../../../CustomizedLineChart";
import { Divider, Paper } from "@mui/material";

const MoneySpentCard = () => {
  return (
    <Paper className="flex">
      <div className="flex-1">
        <div className="mx-4 my-2">
          <div className="text-[18px] font-bold text-textdarkColor">
            Money earned
          </div>
          <div className="mt-12 font-[14px] font-bold text-distlineColor">
            EARNED THIS MONTH
          </div>
          <div className="mt-2 text-[24px] font-bold text-textdarkColor">
            $2,980.00
          </div>
        </div>
        <Divider />
        <div className="mx-4 mt-2 mb-4">
          <div className="mt-8 font-[14px] font-bold text-distlineColor">
            EARNED THIS MONTH
          </div>
          <div className="mt-2 text-[24px] font-bold text-textdarkColor">
            $2,980.00
          </div>
          <div>
            <span className="text-primary font-bold">23%</span>&nbsp;
            <span>less so far</span>
          </div>
        </div>
        <Divider />
        <div className="mx-4 mt-2 mb-4">
          <div className="mt-8 font-[14px] font-bold text-distlineColor">
            ALL-TIME EARNING
          </div>
          <div className="mt-2 text-[24px] font-bold text-textdarkColor">
            $11,980.00
          </div>
        </div>
      </div>
      <div className="flex-[3_3_0%]">
        <CustomizedLineChart />
      </div>
    </Paper>
  );
};

export default MoneySpentCard;
