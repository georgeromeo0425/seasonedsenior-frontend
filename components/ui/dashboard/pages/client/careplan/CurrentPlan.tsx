import React, { useState } from "react";
import CarePlanBox from "@/components/ui/auth/client/CarePlanBox";
import { render } from "react-dom";
import DailyActivities from "./DailyActivities";
import { Box, Modal, Typography } from "@mui/material";
import Careplandlg from "./Careplandlg";
import Image from "next/image";
import careplan2Pic from "@/public/images/careplan/1.png";
import careplan3Pic from "@/public/images/careplan/2.png";
import careplan4Pic from "@/public/images/careplan/3.png";

const CurrentPlan = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleModalOpen = () => setIsOpenModal(true);

  return (
    <div>
      <div className="flex flex-col mx-32 my-12">
        <div className="text font-frutiger text-lg font-bold flex justify-center ">
          <p style={{ color: "#282828", fontSize: "20px" }}>
            You currently are on 3 care plans
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 my-12">
          <Image alt="careplan2" src={careplan2Pic} />
          <Image alt="careplan3" src={careplan3Pic} />
          <Image alt="careplan4" src={careplan4Pic} />
        </div>
        <div className="px-24 py-12 flex justify-center">
          <button
            style={{
              background: "#CB5A6F",
              borderRadius: "8px",
              width: "40%",
              padding: "8px",
              color: "white",
            }}
            onClick={handleModalOpen}
          >
            Edit Care Plan
          </button>
        </div>
      </div>
      {/* <div style={{ display: isOpenModal ? "block" : "none" }}>
        <Careplandlg open={isOpenModal} />
      </div> */}
      <Careplandlg open={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default CurrentPlan;
