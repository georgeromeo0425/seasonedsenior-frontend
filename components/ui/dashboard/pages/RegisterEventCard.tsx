import React from "react";

import Image from "next/image";

type RegisterEventCardProps = {
  creator: string;
  name: string;
  fee: number;
  date: string;
  time: string;
  onRegisterClick: Function;
  onViewClick: Function;
};

const RegisterEventCard = ({
  creator,
  name,
  fee,
  date,
  time,
  onRegisterClick,
  onViewClick,
}: RegisterEventCardProps) => {
  return (
    <div className="relative">
      <Image
        className="absolute opacity-50 z-0"
        src={"/images/event_card.png"}
        alt={""}
        width={350}
        height={240}
      />
      <div className="flex flex-col justify-between bg-black w-[350px] h-[240px] z-10 p-1">
        <div className="text-white z-10">{`Created by: ${creator}`}</div>
        <div className="text-white z-10 flex">
          <div className="w-2/3 grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <p className="font-bold text-xl mr-2">{name}</p>
              <p>{`Fee: ${fee}`}</p>
            </div>
            <p> {date} </p>
            <p> {time} </p>
          </div>
          <div className="w-1/3 flex flex-col gap-2 items-center">
            <span
              className="w-full h-full border bg-white text-red-500 cursor-pointer flex 
                                            items-center justify-center text-sm font-bold"
              onClick={() => onRegisterClick()}
            >
              <p>REGISTER</p>
            </span>
            <span
              className="w-full h-full border border-white cursor-pointer flex 
                                            items-center justify-center text-sm"
              onClick={() => onViewClick()}
            >
              <p>VIEW</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEventCard;
