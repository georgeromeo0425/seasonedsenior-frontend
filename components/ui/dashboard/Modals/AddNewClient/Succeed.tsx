import React from "react";
import SeasonedLogoModal from "../SeasonedLogoModal";

export default function Succeed({
  open,
  onClose,
  onSend,
}: {
  open: boolean;
  onClose: any;
  onSend: any;
}) {
  return (
    <SeasonedLogoModal
      open={open}
      onClose={onClose}
      allowDivider={false}
      content={
        <div className="flex justify-center px-24  pt-6 text-[24px] font-bold text-primary py-4">
          New client successfully added
        </div>
      }
      footer={
        <>
          <div className="flex flex-col text-textdarkColor gap-y-2">
            <div className="flex items-center">
              <span className="flex-auto">
                Send registration link to{" "}
                <span className="text-distlineColor">
                  gabbyalao23@gmail.com
                </span>
              </span>
              <span
                className="border border-solid border-primary py-2 text-primary w-[100px] text-center cursor-pointer ml-4"
                onClick={onSend}
              >
                Send
              </span>
            </div>
            <div className="flex items-center">
              <span className="flex-auto">
                Continue registration for client
              </span>
              <span
                className="text-white bg-primary rounded-md w-[100px] text-center py-2 cursor-pointer ml-4"
                onClick={onClose}
              >
                Continue
              </span>
            </div>
          </div>
        </>
      }
    ></SeasonedLogoModal>
  );
}
