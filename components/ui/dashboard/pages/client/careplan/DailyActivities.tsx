import React, { useState } from "react";

import { Box, Modal, colors } from "@mui/material";

import InputField from "@/components/ui/auth/client/InputField";
import ChooseTime from "../../../ChooseTime";

const DailyActivities = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleClose = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="flex flex-col mx-32 my-12">
      <div className="text font-frutiger text-lg font-bold flex justify-center ">
        <p style={{ color: "#282828", fontSize: "28px" }}>
          Showing your daily activity schedules
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6 my-12 px-40">
        <div className="flex flex-col">
          <div
            className="flex flex-row justify-between"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Waking Time</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Sleeping Time</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>10:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div style={{ fontSize: "24px", color: "#CB5A6F" }}>Meal Times</div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Breakfast</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Lunch</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>12:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Snack</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>07:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div
            className="flex flex-row justify-between mt-4"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Dinner</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>10:00 PM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div style={{ fontSize: "24px", color: "#CB5A6F" }}>
            Activities and Routines
          </div>
          <div
            className="flex flex-row justify-between"
            style={{ color: "#282828", fontSize: "22px" }}
          >
            <div>
              <p>Waking Time</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleOpenModal}
            >
              <p>09:00 AM</p>
              <p style={{ color: "blue" }}>Edit</p>
            </div>
          </div>
          <div style={{ color: "#282828", fontSize: "16px" }}>
            2 Times a week
          </div>
        </div>
        <div
          className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
          style={{
            display: isOpenModal ? "flex" : "none",
          }}
          onClick={() => setIsOpenModal(false)}
        >
          <div
            className="w-1/2 p-4 bg-white rounded-t-xl z-[1005]"
            onClick={(event) => event.stopPropagation()}
          >
            <div>
              <div className="flex flex-col">
                <p
                  className="text font-bold flex justify-center text-2xl"
                  style={{ fontSize: "24px", color: "#282828" }}
                >
                  Edit Walking Time
                </p>
                <p
                  className="mt-4 flex justify-center text-lg font-bold"
                  style={{ fontSize: "16px" }}
                >
                  Current Walking & Sleeping Time
                </p>
                <p
                  className="flex justify-center text-lg font-normal"
                  style={{ fontSize: "16px" }}
                >
                  09:00 AM - 10:00 PM
                </p>
              </div>
              <div className="flex w-full gap-x-8">
                <div className="mt-8 w-1/2">
                  <p
                    className="text font-bold flex items-start"
                    style={{ fontSize: "16px", color: "#282828" }}
                  >
                    Walking Time
                  </p>
                  <div className="mt-4">
                    <ChooseTime />
                  </div>
                </div>
                <div className="mt-8 w-1/2">
                  <p
                    className="text font-bold flex items-start"
                    style={{ fontSize: "16px", color: "#282828" }}
                  >
                    Sleeping Time
                  </p>
                  <div className="mt-4">
                    <ChooseTime />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  className="flex justify-center p-2"
                  style={{
                    background: "#CB5A6F",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "16px",
                    width: "327px",
                    fontWeight: "700",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyActivities;
