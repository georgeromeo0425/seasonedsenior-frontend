import React from "react";

export default function AcceptConfirm({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: any;
  onConfirm: any;
}) {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-50 z-[1000]"
      style={{
        display: open ? "flex" : "none",
      }}
      onClick={onClose}
    >
      <div
        className="p-4 bg-white z-[1005] w-[720px] text-textdarkColor font-bold"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <div className="flex justify-center py-2">
            <span className="font-bold text-[20px]">
              Caregivers Meeting Request
            </span>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex">
              <span className="flex-2">Meeting date</span>
              <span className="flex-3">
                <span className="rounded-xl bg-[#FFF2F5] px-2 py-1">
                  23 October, 2023
                </span>
              </span>
            </div>
            <div className="flex">
              <span className="flex-2">Meeting time</span>
              <span className="flex-3">
                <span className="rounded-xl bg-[#FFF2F5] px-2 py-1">
                  02:34 PM
                </span>
              </span>
            </div>
            <div className="flex">
              <span className="flex-2">Email</span>
              <span className="flex-3">
                <span className="text-distlineColor">
                  franksergio@rocketmail.com
                </span>
              </span>
            </div>
            <div className="flex">
              <span className="flex-2">Description</span>
              <span className="flex-3">
                <span className="text-distlineColor">
                  I want a caregiver that listens and has empathy
                </span>
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <span
              className="text-white bg-primary rounded-md px-24 py-2 cursor-pointer"
              onClick={onConfirm}
            >
              Confirm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
