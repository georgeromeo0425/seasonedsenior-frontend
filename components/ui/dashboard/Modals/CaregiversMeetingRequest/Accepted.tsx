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
          Meeting Request Accepted
        </div>
      }
      footer={
        // <PrimaryButton handleClick={() => setOpen(false)}>Ok</PrimaryButton>
        <div className="flex flex-col gap-y-2">
          <span className="text-primary border border-solid border-primary hover:bg-primary hover:text-white px-12 py-2 rounded-md cursor-pointer">
            Got to dashboard
          </span>
          <button className="text-white bg-primary px-12 py-2 rounded-md cursor-pointer">
            Add to calendar
          </button>
        </div>
      }
    ></SeasonedLogoModal>
  );
}
