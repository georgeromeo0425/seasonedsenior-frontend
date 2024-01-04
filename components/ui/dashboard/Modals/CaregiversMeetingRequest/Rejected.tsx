import React from "react";
import SeasonedLogoModal from "../SeasonedLogoModal";

export default function Accepted({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  return (
    <SeasonedLogoModal
      open={open}
      onClose={onClose}
      content={
        <div className="flex justify-center px-24 pt-6 text-[20px] font-bold">
          Meeting Request Rejected
        </div>
      }
      footer={
        // <PrimaryButton handleClick={() => setOpen(false)}>Ok</PrimaryButton>
        <span 
            className="text-primary border border-solid border-primary hover:bg-primary hover:text-white px-12 py-2 rounded-md cursor-pointer">
          Got to dashboard
        </span>
      }
    ></SeasonedLogoModal>
  );
}
