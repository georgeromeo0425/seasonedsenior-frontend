import SvgEvent from "@/public/icons/Event";
import SvgMoney from "@/public/icons/Money";
import SvgPayment from "@/public/icons/Payment";
import SvgService from "@/public/icons/Service";
import React from "react";

type NewServiceItemProps = {
  name: string;
  time: string;
};

const NewServiceItem = ({ name, time }: NewServiceItemProps) => {
  return (
    <div className="flex items-center px-5 py-2 gap-x-4 bg-white border border-l-0 border-t-0 border-r-0 border-b-1 border-borderGreyColor">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <div>
            <SvgEvent />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-primary text-base font-bold">
              New Event Created
            </p>
            <p className="text-textdarkColor text-base tracking-wider font-arial">
              A new event <b>‘{name}’</b> has been scheduled for Tues, 12 Jan,
              2023. 12 PM. <b className="text-black">Check it out</b>
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="text-textdarkColor text-sm pl-[72px]">{time}</p>
        </div>
      </div>
      <div className="">
        <div className="bg-primary rounded-full w-[8px] h-[8px]"></div>
      </div>
    </div>
  );
};

export default NewServiceItem;
