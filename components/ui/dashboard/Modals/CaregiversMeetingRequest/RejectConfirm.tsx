import React from "react";
import SeasonedLogoModal from "../SeasonedLogoModal";

export default function Accepted({
  open,
  onClose,
  onReject,
}: {
  open: boolean;
  onClose: any;
  onReject: any;
}) {
  return (
    <SeasonedLogoModal
      open={open}
      onClose={onClose}
      content={
        <div className="flex justify-center px-12 pt-6 text-[20px] font-bold">
          Are you sure you want to reject request?
        </div>
      }
      footer={
        <>
          <span
            className="text-brightRedColor border border-solid border-brightRedColor hover:bg-brightRedColor hover:text-white px-12 py-2 rounded-md cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </span>
          <button
            className="text-white bg-brightRedColor px-12 py-2 rounded-md cursor-pointer"
            onClick={onReject}
          >
            Reject
          </button>
        </>
      }
    ></SeasonedLogoModal>
  );
}
