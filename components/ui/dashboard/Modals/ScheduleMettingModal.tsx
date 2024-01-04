import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import ChooseDay from "../ChooseDay";
import ChooseTime from "../ChooseTime";
import { PrimaryButton } from "../../common/PrimaryButton";
import Image from "next/image";
import avatar from "/public/avatars/sample.png";

export default function ScheduleMettingModal({
  name,
  open,
  setOpen,
}: {
  name: string;
  open: boolean;
  setOpen: any;
}) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="px-4 py-4 bg-white z-[1005] w-1/2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center">
          <div className="text-[#CB5A6F] font-bold text-xl text-center w-full">
            Schedule meeting with {name}
          </div>
          <div className="ml-auto">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col mx-12 mt-4">
          <div className="flex">
            <Image
              className="w-[96px] h-[96px] rounded-xl border-2   border-pink-600 mr-5"
              src={avatar}
              alt="Avatar"
            ></Image>
            <div className="ml-auto">
              <div className="font-bold">Avaliable Time Slot</div>
              <div>Mon - Fri</div>
              <div>10 AM - 07 AM</div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/2 m-1">
              <p className="text-textdarkColor font-bold">Select Time</p>
              <ChooseTime />
            </div>
            <div className="w-1/2 m-1">
              <p className="text-textdarkColor font-bold">Select Date</p>
              <ChooseDay />
            </div>
          </div>
          <div className="text-center mt-8">
            <PrimaryButton href="" handleClick={() => {}}>
              Schedule
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
