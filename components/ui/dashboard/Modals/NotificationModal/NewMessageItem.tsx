import SvgMessage from "@/public/icons/Message";
import SvgMoney from "@/public/icons/Money";
import SvgSms from "@/public/icons/Sms";
import React from "react";

type NewMessageItemProps = {
  from: string;
  isViewed: boolean;
  time: string;
};

const NewMessageItem = ({ from, isViewed, time }: NewMessageItemProps) => {
  return (
    <div className="flex items-center px-5 py-2 gap-x-4 bg-transparent border border-l-0 border-t-0 border-r-0 border-b-1 border-borderGreyColor">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <div>
            <SvgMessage />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-primary text-base font-bold">
              New Message Received
            </p>
            <p className="text-textdarkColor text-base tracking-wider font-arial">
              You have received a new message from <b>{from}</b>: Would you be
              available for a new pitch
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

export default NewMessageItem;
