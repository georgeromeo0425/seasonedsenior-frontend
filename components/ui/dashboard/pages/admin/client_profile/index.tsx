import React, { useState } from "react";
import Image from "next/image";
import avatar from "/public/avatars/sample.png";
import { Button, Divider } from "@mui/material";
import { PrimaryButton } from "@/components/ui/common/PrimaryButton";
import ScheduleMettingModal from "../../../Modals/ScheduleMettingModal";

const fakerData = {
  imagePath: "public/avatars/sample.png",
  name: "Jimmy Dunta",
  age: 76,
  address: "Maryland lane, Arizona, USA.",
  distance: 1.4,
  hireNumber: 45,
  offerMin: 12,
  offerMax: 35,
  workItems: [
    "Housekeeping",
    "Meal Preparation",
    "Meal Preparation",
    "24/7 Care",
    "Resipe Care",
  ],
  tags: ["English", "French", "Christianity"],
};

export default function ClientProfilePage() {
  const {
    name,
    age,
    address,
    distance,
    hireNumber,
    offerMin,
    offerMax,
    workItems,
    tags,
  } = fakerData;

  const [open, setOpen] = useState(false);
  return (
    <div className="px-8 py-2">
      <div className="flex p-4 m-2 font-arial justify-center">
        <Image
          className="w-[172px] h-[172px] rounded-xl border-2   border-pink-600 mr-5"
          src={avatar}
          alt="Avatar"
        ></Image>
        <div className="flex-col justify-center gap-x-2 w-4/5">
          <div className="flex">
            <div>
              <div className="flex items-center mb-2">
                <p className="text-black font-bold mr-2">{name}</p>
                <p className="text-distlineColor text-sm mr-auto">
                  {age + "yrs/old"}
                </p>
              </div>
              <div className="flex">
                <p className="text-distlineColor text-sm mr-2">{address}</p>
                <p className="text-distlineColor text-sm">
                  {distance + " miles away"}
                </p>
              </div>
              <div className="flex my-2">
                <div className="flex items-center mr-6">
                  <p className="text-sm font-bold mr-2">Hires:</p>
                  <p className="text-sm text-distlineColor">
                    {hireNumber + " caregivers"}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-bold mr-2">Offer:</p>
                  <p className="text-sm text-distlineColor">
                    {"$" + offerMin + " - " + offerMax + "/hr"}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div onClick={() => setOpen(true)}>
                <PrimaryButton href="">Schedule meeting</PrimaryButton>
              </div>
            </div>
          </div>
          <div className="my-2">
            <Divider />
          </div>
          <div className="flex items-center gap-2">
            {workItems.map((item, index) => (
              <span
                key={index}
                className="bg-red-200 rounded-3xl text-textdarkColor text-sm px-2 py-1 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2 ">
            {tags.map((item, index) => (
              <span
                key={index}
                className="flex justify-center items-center text-sm bg-white px-4 rounded-md border border-solid border-distlineColor cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <ScheduleMettingModal
          open={open}
          setOpen={setOpen}
          name="Jimmy Dunta"
        />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <p className="my-2 font-bold">Client&apos;s Request</p>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Monday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Tuesday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Wednesday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Thursday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Friday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Saturday</span>
          <span>06:00 AM</span>
        </div>
        <div className="flex gap-x-24">
          <span className="w-[40px]">Sunday</span>
          <span>06:00 AM</span>
        </div>
      </div>
    </div>
  );
}
