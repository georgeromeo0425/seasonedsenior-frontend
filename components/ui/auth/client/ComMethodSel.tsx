"use client";

import React, { useState } from "react";
const ComMethodSel = ({
  title,
  index,
  statusProp,
  onClick,
}: {
  title: string;
  index?: number;
  statusProp?: boolean;
  onClick?: Function;
}) => {
  const [status, setStatus] = useState(false);

  return (
    <div
      className="mt-5 flex justify-between items-center peer h-10 w-full bg-white border-[1px] rounded-md border-distlineColor text-sm font-arial pl-5 py-6 cursor-pointer"
      onClick={(e) => {
        statusProp !== undefined ? onClick && onClick(e) : setStatus(!status);
      }}
    >
      <p className="text-sm font-arial font-normal leading-5 text-textdarkColor">
        {title}
      </p>
      <input
        type="radio"
        className="w-4 h-4 text-textdarkColor accent-[#CB5A6F] bg-gray-100 border-gray-300 mr-5"
        name={statusProp === undefined ? `planradio${index}` : `planradio`}
        checked={statusProp === undefined ? status : statusProp}
        onClick={() => setStatus(!status)}
      />
    </div>
  );
};

ComMethodSel.displayName = "ComMethodSel";

export default ComMethodSel;
