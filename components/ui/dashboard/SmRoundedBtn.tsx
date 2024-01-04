import React from "react";

const SmRoundedBtn = ({ value }: { value: string }) => {
  return (
    <div
      style={{ border: "1px solid #505050", width: "max-content" }}
      className="p-1 font-normal text-bannerTextColor text-[12px] min-w-[32px] text-center rounded-2xl tracking-wider"
    >
      {value}
    </div>
  );
};

export default SmRoundedBtn;
