import React, { useState } from "react";

import SvgPhotoArea from "@/public/icons/PhotoArea";
import InputField from "@/components/ui/auth/client/InputField";
import ChooseDay from "../../../../ChooseDay";
import ChooseTime from "../../../../ChooseTime";

const MyEvents = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center w-full">
      {isEditing ? (
        <div className="flex flex-col items-center pt-4 w-2/3">
          <div className="flex flex-col items-start cursor-pointer">
            <p className="text-black">Event Photo</p>
            <SvgPhotoArea />
          </div>
          <div className="flex w-full">
            <div className="w-1/2 m-1">
              <p className="text-black">Name of Event</p>
              <InputField
                title=""
                placholder="Enter name for event"
                type=""
                value=""
                handleChange={() => {}}
              />
            </div>
            <div className="w-1/2 m-1">
              <p className="text-black">Capacity</p>
              <InputField
                title=""
                placholder="Enter name for event"
                type=""
                value=""
                handleChange={() => {}}
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 m-1">
              <p className="text-black">Address</p>
              <InputField
                title=""
                placholder="Enter name for event"
                type=""
                value=""
                handleChange={() => {}}
              />
            </div>
            <div className="w-1/2 m-1">
              <p className="text-black">Fee</p>
              <InputField
                title=""
                placholder="Enter name for event"
                type=""
                value=""
                handleChange={() => {}}
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 m-1">
              <p className="text-black">Start Date</p>
              <ChooseDay />
            </div>
            <div className="w-1/2 m-1">
              <p className="text-black">Start Time</p>
              <ChooseTime />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 m-1">
              <p className="text-black">End Date</p>
              <ChooseDay />
            </div>
            <div className="w-1/2 m-1">
              <p className="text-black">End Time</p>
              <ChooseTime />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-black font-bold font-arial mb-44 pt-10">
          You have not created any event
        </p>
      )}
      <span
        className={`bg-primary px-20 py-2 rounded font-semibold cursor-pointer text-white ${
          isEditing ? "mt-4" : "mt-44"
        }`}
        onClick={() => setIsEditing(!isEditing)}
      >
        Create Event
      </span>
    </div>
  );
};

export default MyEvents;
