"use client";

import React, { useState } from "react";
import Image from "next/image";
const CarePlanBox = ({
  title,
  description,
  thumbnail,
  index,
}: {
  title: string;
  description: string;
  thumbnail: string;
  index: number;
}) => {
  const [status, setStatus] = useState(false);
  return (
    <div
      className="flex justify-between items-center border border-textdarkColor rounded-[8px] p-[8px] cursor-pointer"
      onClick={() => {
        setStatus(!status);
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxWidth: "20%",
        }}
      ></div>
      <div className="flex flex-col mx-2">
        <p className="text-sm font-arial font-bold leading-5 text-textdarkColor">
          {title}
        </p>
        <p className="text-xs font-arial font-light leading-5 text-textdarkColor mt-1">
          {description}
        </p>
      </div>
      <div>
        <input
          type="radio"
          className="accent-[#CB5A6F] w-4 h-4 text-textdarkColor bg-gray-100 border-gray-300 "
          name={`plancare${index}`}
          checked={status}
          onClick={() => setStatus(!status)}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

CarePlanBox.displayName = "CarePlanBox";

export default CarePlanBox;
